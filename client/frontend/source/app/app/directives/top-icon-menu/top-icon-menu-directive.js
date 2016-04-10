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
      scope.vm.options = getDefaultOptions();
      scope.vm.toogleSwipeMenu = toogleSwipeMenu;
      scope.vm.toogleLanguageList = toogleLanguageList;

      setSwipeMenuHeigh();
      scope.$on("window-resized", setSwipeMenuHeigh);

      function getDefaultOptions() {
        return {
          showLanguageList: false
        }
      }
      function toogleSwipeMenu() {
        var style = document.body.style;
        style.overflow = style.overflow ? '' : 'hidden';
      }
      function toogleLanguageList() {
        scope.vm.options.showLanguageList = !scope.vm.options.showLanguageList;
      }
      function setSwipeMenuHeigh() {
        var swipeMenu = angular.element(document.querySelector('.swipe-menu'));
        var heigh = window.innerHeight - 50;
        swipeMenu.css('height', heigh + 'px');
      }

    }
  }

})();