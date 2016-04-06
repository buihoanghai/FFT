(function () {
  'use strict';

  angular
      .module('app.product')
      .directive('widgetProducts', widgetProducts);

  widgetProducts.$inject = ['$window'];

  function widgetProducts($window) {
    var directive = {
      link: link,
      bindToController: true,
      controller: 'app.product.widgetProductsController as vm',
      restrict: 'EA',
      templateUrl: 'app/product/directives/widget-products/_tpl/widget-products.tpl.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

})();