(function () {
  'use strict';
  objectService.$inject = [];
  function objectService() {
    var revealed = {
      simpleFunc: simpleFunc,
      simpleFunc2: simpleFunc2
    };
    function simpleFunc(a,b) {
      return a + b;
    }
    function simpleFunc2(a, b) {
      if (a > b) {
        return a + b;
      }
      return a - b;
    }
    return revealed;
  }
  angular.module('app.object').service('app.object.objectService', objectService);
})();
