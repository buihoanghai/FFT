(function () {
  'use strict';
  objectController.$inject = ['app.object.objectService'];
  angular.module('app.object').controller('app.object.objectController', objectController);
  function objectController() {
    var vm = this;
    vm.id = 'objectController';
  }
})();
