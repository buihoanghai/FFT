(function () {
  'use strict';
  function appController($scope) {
    $scope.test11 = "test3222";
    //- Attach FastClick to body
    FastClick.attach(document.body);
  }
  appController.$inject = ['$scope'];
  angular.module('app').controller('app.appController', appController);
})();
