(function () {
  'use strict';

  angular
      .module('app')
      .directive('search', search);

  search.$inject = ['$window'];

  function search($window) {
    var directive = {
      link: link,
      bindToController: true,
      scope: {},
      controller: 'app.searchController as vm',
      restrict: 'EA',
      templateUrl: 'app/app/directives/search/_tpl/search.tpl.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

})();