/**
      4.5(min), preferred (7)
    http://colorsafe.co/
    https://webaim.org/resources/contrastchecker/
    http://accessible-colors.com/
    ------------------------
    shades
    https://mycolor.space  
   */

class ColorThemeCls {

    constructor() {
        
    }

    static setPageCssVariables(_$pgRootElm, _pgCssVariables) {
        if (_$pgRootElm && _$pgRootElm.length && _pgCssVariables) {
            for (var key in _pgCssVariables) {
                _$pgRootElm[0].style.setProperty(key, _pgCssVariables[key]);
            }
        }
    }
    static getThemePaletteColors(_pageObj, _themeId) {
        var retPageColorObj = null;

        if (_themeId && _pageObj && ColorThemeCls.palettesObj && ColorThemeCls.materialThemesObj) {

            retPageColorObj = {};
            for (var clrVar in _pageObj) {
                var clrValueArr = _pageObj[clrVar];
                if (clrValueArr && clrValueArr.length) {

                    if (_pageObj.CustomClrIndex && clrValueArr.length > _pageObj.CustomClrIndex) {
                        retPageColorObj[clrVar] = clrValueArr[_pageObj.CustomClrIndex];
                    }
                    else if (_themeId && ColorThemeCls.materialThemesObj[_themeId]) {

                        var paletteColorKey = clrValueArr[0];
                        var targetPaletteName = '';
                        if (paletteColorKey.startsWith('S')) {
                            targetPaletteName = ColorThemeCls.materialThemesObj[_themeId]['SecondaryShade'];
                            paletteColorKey = paletteColorKey.replace('S', '');
                        }
                        else {
                            targetPaletteName = ColorThemeCls.materialThemesObj[_themeId]['PrimaryShade'];
                        }

                        var keyPathArr = paletteColorKey.split('.');

                        if (ColorThemeCls.palettesObj[targetPaletteName] && keyPathArr.length > 1) {

                            var shade = ColorThemeCls.palettesObj[targetPaletteName][keyPathArr[0]];
                            if (shade) {
                                retPageColorObj[clrVar] = shade[keyPathArr[1]];
                            }
                        }
                    }

                }

            }
        }
        return retPageColorObj;
    }
    
    static setPageTheme(_pageElm,_colorObj){
        if(_pageElm && _pageElm.length && _colorObj){
            var pgClrObj = ColorThemeCls.getThemePaletteColors(_colorObj, ColorThemeCls.materialThemeId);
            if (pgClrObj) {
                ColorThemeCls.setPageCssVariables(_pageElm, pgClrObj);
            }
        }
    }
        
    static setProductThemeId(_themeId) {
        if (_themeId) {
            ColorThemeCls.materialThemeId = _themeId;
        }
    }
}

ColorThemeCls.palettesObj = {
    MaterialBlueGreyPalette: {
        Light5: {
            BG: '#ECEFF1',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.55)',
        },
        Light4: {
            BG: '#CFD8DC',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Light3: {
            BG: '#B0BEC5',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Light2: {
            BG: '#90A4AE',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.55)',
        },
        Light1: {
            BG: '#78909C',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.75)',
        },
        Regular: {
            BG: '#607D8B',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Dark1: {
            BG: '#546E7A',
            Txt: 'rgb(255,255,255)',
            TxtDim: '',
        },
        Dark2: {
            BG: '#455A64',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.7)',
        },
        Dark3: {
            BG: '#37474F',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.6)',
        },
        Dark4: {
            BG: '#263238',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.5)',
        },
        Other1: {
            BG: 'rgba(255,255,255,0.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other2: {
            BG: 'rgba(0,0,0,.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other3:{
            BG: 'rgba(0,0,0)',
            Txt: 'rgb(255,255,255)',
            TxtDim: '',
        },
        Other4:{
            BG: 'rgb(255,255,255)',
            Txt: 'rgba(0,0,0)',
            TxtDim: '',
        }
    },
    MaterialAmberPalette: {
        Light5: {
            BG: '#FFF8E1',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.55)',
        },
        Light4: {
            BG: '#FFECB3',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.55)',
        },
        Light3: {
            BG: '#FFE082',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.6)',
        },
        Light2: {
            BG: '#FFD54F',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.6)',
        },
        Light1: {
            BG: '#FFCA28',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.6)',
        },
        Regular: {
            BG: '#FFC107',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.6)',
        },
        Dark1: {
            BG: '#FFB300',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Dark2: {
            BG: '#FFA000',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.65)',
        },
        Dark3: {
            BG: '#FF8F00',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,.65)',
        },
        Dark4: {
            BG: '#FF6F00',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.7)',
        },
        Other1: {
            BG: 'rgba(255,255,255,0.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other2: {
            BG: 'rgba(0,0,0,.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other3:{
            BG: 'rgba(0,0,0)',
            Txt: 'rgb(255,255,255)',
            TxtDim: '',
        },
        Other4:{
            BG: 'rgb(255,255,255)',
            Txt: 'rgba(0,0,0)',
            TxtDim: '',
        }
    },
    MaterialIndigoPalette: {
        Light5: {
            BG: '#E8EAF6',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.55)',
        },
        Light4: {
            BG: '#C5CAE9',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Light3: {
            BG: '#9FA8DA',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.65)',
        },
        Light2: {
            BG: '#7986CB',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.75)',
        },
        Light1: {
            BG: '#5C6BC0',
            Txt: 'rgb(255,255,255)',
            TxtDim: '',
        },
        Regular: {
            BG: '#3F51B5',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.75)',
        },
        Dark1: {
            BG: '#3949AB',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.7)',
        },
        Dark2: {
            BG: '#303F9F',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.65)',
        },
        Dark3: {
            BG: '#283593',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.6)',
        },
        Dark4: {
            BG: '#1A237E',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.5)',
        },
        Other1: {
            BG: 'rgba(255,255,255,0.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other2: {
            BG: 'rgba(0,0,0,.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other3:{
            BG: 'rgba(0,0,0)',
            Txt: 'rgb(255,255,255)',
            TxtDim: '',
        },
        Other4:{
            BG: 'rgb(255,255,255)',
            Txt: 'rgba(0,0,0)',
            TxtDim: '',
        }
    },
    MaterialLightGreenPalette: {
        Light5: {
            BG: '#F1F8E9',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.55)',
        },
        Light4: {
            BG: '#DCEDC8',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Light3: {
            BG: '#C5E1A5',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Light2: {
            BG: '#AED581',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Light1: {
            BG: '#9CCC65',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.6)',
        },
        Regular: {
            BG: '#8BC34A',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.65)',
        },
        Dark1: {
            BG: '#7CB342',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.65)',
        },
        Dark2: {
            BG: '#689F38',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.75)',
        },
        Dark3: {
            BG: '#558B2F',
            Txt: 'rgb(0,0,0)',
            TxtDim: 'rgba(0,0,0,0.85)',
        },
        Dark4: {
            BG: '#33691E',
            Txt: 'rgb(255,255,255)',
            TxtDim: 'rgba(255,255,255,0.75)',
        },
        Other1: {
            BG: 'rgba(255,255,255,0.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other2: {
            BG: 'rgba(0,0,0,.12)',
            Txt: 'rgb(0,0,0)',
            TxtDim: '',
        },
        Other3:{
            BG: 'rgba(0,0,0)',
            Txt: 'rgb(255,255,255)',
            TxtDim: '',
        },
        Other4:{
            BG: 'rgb(255,255,255)',
            Txt: 'rgba(0,0,0)',
            TxtDim: '',
        }
    }
}

ColorThemeCls.materialThemesObj = {
    StandardTheme: {
        Name: 'Standard Theme',
        PrimaryShade: 'MaterialBlueGreyPalette',
        SecondaryShade: 'MaterialAmberPalette'
    },
    LogoTheme: {
        Name: 'Logo Theme',
        PrimaryShade: 'MaterialIndigoPalette',
        SecondaryShade: 'MaterialLightGreenPalette'
    },
    LogoReverseTheme: {
        Name: 'Logo Reverse Theme',
        PrimaryShade: 'MaterialLightGreenPalette',
        SecondaryShade: 'MaterialIndigoPalette'
    }
}

ColorThemeCls.materialThemeId = 'StandardTheme';


export { ColorThemeCls }
