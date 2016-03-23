(function () {
    'use strict';

    angular
        .module('app')
        .controller('app.menuTopController', menuTopController);

    menuTopController.$inject = ['$location'];

    function menuTopController($location) {
        var vm = this;
        vm.id = 'menuTopController';
        activate();

        function activate() { }
    }
})();
