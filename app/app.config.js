(function () {
    'use strict';
    angular
        .module('app')
        .config(config)
        .run([
        '$rootScope', function ($rootScope) {
        }
    ]);
    config.$inject = ['$locationProvider'];
    function config($locationProvider) {
        $locationProvider.html5Mode(false);
    }
})();
