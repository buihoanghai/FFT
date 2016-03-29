(function () {
    'use strict';

    angular
        .module('app')
        .controller('app.searchController', searchController);

    searchController.$inject = ['$location'];

    function searchController($location) {
        var vm = this;
        vm.id = 'searchController';
        activate();

        function activate() { }
    }
})();
