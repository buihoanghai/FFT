(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('app.product.widgetProductsController', widgetProductsController);

    widgetProductsController.$inject = ['$location'];

    function widgetProductsController($location) {
        var vm = this;
        vm.id = 'widgetProductsController';
        activate();
      vm.list = [1, 2, 3, 4, 5, 6,8,9,10,11,12,13,14,15];
        function activate() { }
    }
})();
