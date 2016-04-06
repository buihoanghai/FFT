(function () {
  'use strict';
  productController.$inject = [];
  angular.module('app.product').controller('app.product.productController', productController);
  function productController() {
    var vm = this;
    vm.id = 'productController';
  }
})();
