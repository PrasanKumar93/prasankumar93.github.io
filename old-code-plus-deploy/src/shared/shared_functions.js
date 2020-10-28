class SharedFunctionsCls {

  static setPageCssVariables(_$pgRootElm, _pgCssVariables) {
    if (_$pgRootElm && _$pgRootElm.length && _pgCssVariables) {
      for (var key in _pgCssVariables) {
        _$pgRootElm[0].style.setProperty(key, _pgCssVariables[key]);
      }
    }
  }
}


export { SharedFunctionsCls}
