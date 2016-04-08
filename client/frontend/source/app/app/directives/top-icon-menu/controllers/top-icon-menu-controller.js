(function () {
  'use strict';

  angular
      .module('app')
      .controller('app.topIconMenuController', topIconMenuController);

  topIconMenuController.$inject = ['$rootScope'];

  function topIconMenuController($rootScope) {
    var vm = this;
    vm.id = 'topIconMenuController';
    activate();

    function activate() { }
  }
})();
