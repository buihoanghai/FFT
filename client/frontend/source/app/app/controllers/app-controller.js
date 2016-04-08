(function () {
  'use strict';
  appController.$inject = [
    '$rootScope',
    '$scope',
    '$window',
    'common.window-resize-listener.windowResizeListenerService'
  ];
  function appController($rootScope, $scope,$window, windowResizeListenerService) {
    $scope.test11 = "test3222";
    //- Attach FastClick to body
    FastClick.attach(document.body);

    //- On window resize
    windowResizeListenerService.setListener($rootScope, $window);
  }
  
  angular.module('app').controller('app.appController', appController);
})();
