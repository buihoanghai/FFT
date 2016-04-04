(function () {
  'use strict';

  angular
      .module('app')
      .directive('listObject', listObject);

  listObject.$inject = ['$window'];

  function listObject($window) {
    var directive = {
      link: link,
      bindToController: true,
      controller: 'app.listObjectController as vm',
      restrict: 'EA',
      templateUrl: 'app/app/directives/list-object/_tpl/list-object-1.tpl.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

})();