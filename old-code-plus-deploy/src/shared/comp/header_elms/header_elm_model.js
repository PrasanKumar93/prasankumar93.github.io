import { ColorThemeCls } from '../../color_theme';

class HeaderElmModelCls {
    constructor() {
        this.headerType = {
            Pen: 'pen',
            Tag: 'tag'
        };
        // this.pageLabels = {};
        this.pageColorDataObj = {
            ['--sha-pg008-head-bg']: ['Light4.BG'],
            ['--sha-pg008-head-txt']: ['Light4.Txt'],
            ['--sha-pg008-head-triangle-bg']: ['Light2.BG'],
            ['--sha-pg008-head-triangle-txt']: ['Light2.Txt'],
            ['--sha-pg008-dot-bg']: ['Other4.BG'],
            ['--sha-pg008-dot-txt']: ['Other4.Txt'],
        };

    }

    onPageLoad(_$pageElm) {
        this.setTheme(_$pageElm);
        this.setContainerDimensions(_$pageElm);
    }

    setContainerDimensions(_$pageElm) {
        if (_$pageElm && _$pageElm.length) {
            var $parentContainer = _$pageElm.parent();
            var containerDimensions = {};
            setTimeout(() => {
                containerDimensions.Width = $parentContainer.width();
                containerDimensions.Height = $parentContainer.height();
                _$pageElm[0].style.setProperty('--container-width', containerDimensions.Width + 'px');
                _$pageElm[0].style.setProperty('--container-height', containerDimensions.Height + 'px');
            }, 10)
        }
    }
    setTheme(_$pageElm){
        ColorThemeCls.setPageTheme(_$pageElm, this.pageColorDataObj);
    }
}
export { HeaderElmModelCls }
