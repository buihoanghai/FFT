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

        function activate() { }
    }
})();
