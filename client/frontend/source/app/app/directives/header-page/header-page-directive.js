(function () {
  'use strict';

  angular
      .module('app')
      .directive('headerPage', headerPage);

  headerPage.$inject = ['$window'];

  function headerPage($window) {
    var directive = {
      link: link,
      bindToController: true,
      scope: {},
      controller: 'app.headerPageController as vm',
      restrict: 'EA',
      templateUrl: 'app/app/directives/header-page/_tpl/header-page.tpl.html'
    };
    return directive;

    function link(scope, element, attrs) {
      scope.vm.options = getDefaultOptions();
      scope.vm.toogleMenu = toogleMenu;
      scope.vm.toogleLanguageList = toogleLanguageList;
      function getDefaultOptions() {
        return {
          showMenu: false,
          showLanguageList: false
        }
      }
      function toogleMenu() {
        scope.vm.options.showMenu = !scope.vm.options.showMenu;
      }
      function toogleLanguageList() {
        scope.vm.options.showLanguageList = !scope.vm.options.showLanguageList;
      }
    }
  }

})();