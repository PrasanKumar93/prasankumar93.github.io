import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ColorThemeCls } from './shared/color_theme';

@inject(EventAggregator)
export class App {
    constructor(eventAggregatorObj) {
        //give print icon (with all expanded)
        this.eventAggregatorObj = eventAggregatorObj;
        this.pageLabels = {
            Summary: 'Summary',
            Experience: 'Experience',
            Education: 'Education',
            OtherDetails: 'Other Details',
            LastUpdatedOn: 'Last Updated On : ',
            TechSkillHeaderObj: {
                Type: 'pen',
                Heading: 'Technical Skills'
            },
            Client: 'Client',
            Server: 'Server',
            Database: 'Database',
            Others: 'Others',
            TechSkillFooter: '* denotes learning',
            Projects: 'Projects',
            ProjectDescription: 'Description',
            Technologies: 'Technologies Used',
            Responsibilities: 'Responsibilities',
            Achievements: 'Special Achievements',
            ClickToProint : 'Click to Print',
            ChangeTheme : 'Change Theme'
        };
        this.themeColorObject = {
                ['--page-001-color-1']:['Light5.BG'],
                ['--page-001-color-1-txt']:['Light5.Txt'],
                ['--page-001-color-2']:['Light4.BG'],
                ['--page-001-color-2-txt']:['Light4.Txt'],
                ['--page-001-color-3']:['Light1.BG'],
                ['--page-001-color-3-txt']:['Light1.Txt'],
                ['--page-001-color-4']:['Dark1.BG'],
                ['--page-001-color-4-txt']:['Dark1.Txt'],
                ['--page-001-color-5']:['Dark3.BG'],
                ['--page-001-color-5-txt']:['Dark3.Txt'],
                ['--page-001-color-6']:['Dark4.BG'],
                ['--page-001-color-6-txt']:['Dark4.Txt'],
                ['--page-001-color-7']:['Light3.BG'],
                ['--page-001-color-7-txt']:['Light3.Txt'],
                ['--page-001-color-8']:['Light1.BG'],
                ['--page-001-color-8-txt']:['Light1.Txt'],
                ['--page-001-sec-color-1']:['SDark2.BG'],
                ['--page-001-sec-color-1-txt']:['SDark2.Txt'],
                ['--page-001-sec-color-2']:['SDark4.BG'],
                ['--page-001-sec-color-2-txt']:['SDark4.Txt'],
                ['--page-001-sec-color-3']:['SLight4.BG'],
                ['--page-001-sec-color-3-txt']:['SLight4.Txt'],
                ['--page-001-sec-color-4']:['SLight2.BG'],
                ['--page-001-sec-color-4-txt']:['SLight2.Txt'],
                
        };
        this.isMobileScreen = this.getIsMobileScreen();
    }
    activate() {
        var promObj = this.getProfileDataByUrl();
        return promObj;
    }
    attached(){
        this.pageElm = $('.page-main-container');
        this.themeValArr = Object.keys(ColorThemeCls.materialThemesObj);
        var defaultThemeId = ColorThemeCls.materialThemeId;
        if(this.themeValArr && this.themeValArr.length && defaultThemeId){
            var themeIndex = this.themeValArr.indexOf(defaultThemeId);
            if(themeIndex > -1){
                this.themeIndex = themeIndex;
            }
            else{
                this.themeIndex = 0;
            }
        }
        this.userChangeTheme = this.eventAggregatorObj.subscribe('changeTheme',()=>{
            ColorThemeCls.setPageTheme(this.pageElm,this.themeColorObject);
        });
        ColorThemeCls.setPageTheme(this.pageElm,this.themeColorObject);
    }
    detached(){
        this.userChangeTheme.dispose();
    }
    getProfileDataByUrl() {
        var currentUrl = window.location.href;
        var userName = '';
      
        if(currentUrl.indexOf("localhost") < 0) {
            var initialIndex = currentUrl.indexOf('//');
            var finalIndex = currentUrl.indexOf('.github.io');
            if(initialIndex && finalIndex) {
                userName = currentUrl.slice(initialIndex+1, finalIndex);
            }
        }

        var prmObj = new Promise((resolve, reject)=>{

            var path = './data' + userName + '/profile_data';
            var promObj1 = this.getPageData(path);

            promObj1.then((pageData) => {
                resolve(pageData);
            }).catch((error) => {
                path = './data/default/profile_data';

                this.getPageData(path).then((pageData)=>{
                    resolve(pageData);
                }).catch((errorMsg)=>{
                    reject(errorMsg);
                });
            });
          
        });
        return prmObj;
    }

    getPageData(_path) {
        var promObj = import('' + _path).then((module) => {
            this.pageData = module.profileData;
            return Promise.resolve(module.profileData);
        }, (error) => {
            return Promise.reject(error);
        });
        return promObj;
    }

    getIsMobileScreen() {
        var isMobileScreen = false;

        var width = $(window).width();
        var height = $(window).height();

        var allScreenSizeTypes = {
            EXTRA_SMALL: 480, //px
            SMALL: 768,
            MEDIUM: 992,
            LARGE: 1200,
            EXTRA_LARGE: 5000
        }

        if (width <= allScreenSizeTypes.EXTRA_SMALL) {
            isMobileScreen = true;
        }

        return isMobileScreen;
    }
    evtChangeTheme(){
        if(this.themeValArr && this.themeValArr.length){
            this.themeIndex += 1;
            if(this.themeIndex >= this.themeValArr.length){
                this.themeIndex = 0;
            }
            ColorThemeCls.setProductThemeId(this.themeValArr[this.themeIndex]);
            this.eventAggregatorObj.publish('changeTheme');
        }
    }
}
