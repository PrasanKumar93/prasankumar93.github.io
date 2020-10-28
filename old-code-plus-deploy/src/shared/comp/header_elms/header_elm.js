import { containerless, customElement, bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { HeaderElmModelCls } from './header_elm_model';

@customElement('cst-header-elm') //custom name
@containerless() //to remove custom element wrapper in dom


/*

Note : Min height should be 130px and min width should be 350px
@bindable details = {
        Type : 'pen'/'tag',
        Heading : 'Tenders',
}
 @bindable options = {
    ChangeDirection : true,
 }   
*/
@inject(EventAggregator)
class HeaderElmCls {
    @bindable details;
    @bindable options;
    constructor(eventAggregatorObj){
        this.mdlObj = new HeaderElmModelCls();   
        //this.pageLabels = this.mdlObj.pageLabels;
        this.headerType = this.mdlObj.headerType;
        this.eventAggregatorObj = eventAggregatorObj;
    }
    attached(){
        var $headerMainElm = $(this.headerMainElm);
        this.mdlObj.onPageLoad($headerMainElm);       
        this.userChangeTheme = this.eventAggregatorObj.subscribe('changeTheme',()=>{
            this.mdlObj.setTheme($headerMainElm)
        });
    }


}
export { HeaderElmCls }
