(function () {
    'use strict';

    angular
        .module('app')
        .controller('app.listObjectController', listObjectController);

    listObjectController.$inject = ['$location'];

    function listObjectController($location) {
        var vm = this;
        vm.id = 'listObjectController';
        activate();

        function activate() { }
    }
})();
