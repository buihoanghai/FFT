(function () {
    'use strict';

    angular
        .module('app')
        .service('listObjectService', listObjectService);

    listObjectService.$inject = ['$http'];

    function listObjectService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();