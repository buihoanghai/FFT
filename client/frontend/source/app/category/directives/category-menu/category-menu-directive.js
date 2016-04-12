(function () {
  'use strict';

  angular
      .module('app.category')
      .directive('categoryMenu', categoryMenu);

  categoryMenu.$inject = ['$window'];

  function categoryMenu($window) {
    var directive = {
      link: link,
      bindToController: true,
      scope: {},
      controller: 'app.category.categoryMenuController as vm',
      restrict: 'EA',
      templateUrl: 'app/category/directives/category-menu/_tpl/category-menu.tpl.html'
    };
    return directive;

    function link(scope, element, attrs) {
      scope.vm.options = getDefaultOptions();
      scope.vm.toogleMenu = toogleMenu;
      function getDefaultOptions() {
        return {
          showMenu: false
        }
      }
      function toogleMenu() {
        scope.vm.options.showMenu = !scope.vm.options.showMenu;
      }
    }
  }

})();