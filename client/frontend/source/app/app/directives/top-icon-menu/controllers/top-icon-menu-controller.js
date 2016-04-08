(function () {
    'use strict';

    angular
        .module('app')
        .controller('app.topIconMenuController', topIconMenuController);

    topIconMenuController.$inject = ['$location'];

    function topIconMenuController($location) {
        var vm = this;
        vm.id = 'topIconMenuController';
        activate();

        function activate() { }
    }
})();
