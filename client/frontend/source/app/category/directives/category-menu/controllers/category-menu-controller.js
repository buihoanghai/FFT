(function () {
    'use strict';

    angular
        .module('app.category')
        .controller('app.category.categoryMenuController', categoryMenuController);

    categoryMenuController.$inject = ['$location'];

    function categoryMenuController($location) {
        var vm = this;
        vm.id = 'categoryMenuController';
        activate();

        function activate() { }
    }
})();
