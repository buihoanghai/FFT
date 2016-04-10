(function () {
  'use strict';

  angular
      .module('app')
      .controller('app.headerPageController', headerPageController);

  headerPageController.$inject = ['$rootScope'];

  function headerPageController($rootScope) {
    var vm = this;
    vm.id = 'headerPageController';
    activate();

    function activate() { }
  }
})();
