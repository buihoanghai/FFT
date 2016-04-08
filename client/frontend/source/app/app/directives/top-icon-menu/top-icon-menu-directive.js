(function () {
  'use strict';

  angular
      .module('app')
      .directive('topIconMenu', topIconMenu);

  topIconMenu.$inject = ['$window'];

  function topIconMenu($window) {
    var directive = {
      link: link,
      bindToController: true,
      controller: 'app.topIconMenuController as vm',
      restrict: 'EA',
      templateUrl: 'app/app/directives/top-icon-menu/_tpl/top-icon-menu.tpl.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

})();