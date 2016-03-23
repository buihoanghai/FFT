(function () {
  'use strict';

  angular
      .module('app')
      .directive('menuTop', menuTop);

  menuTop.$inject = ['$window'];

  function menuTop($window) {
    var directive = {
      link: link,
      bindToController: true,
      controller: 'app.menuTopController as vm',
      restrict: 'EA',
      templateUrl: 'app/app/directives/menu-top/_tpl/menu-top.tpl.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

})();