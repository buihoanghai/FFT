(function () {
  'use strict';
  homeController.$inject = ['app.home.homeService'];
  angular.module('app.home').controller('app.home.homeController', homeController);
  function homeController() {
    var vm = this;
    vm.id = 'homeController';
  }
})();
