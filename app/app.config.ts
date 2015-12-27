((): void => {
    'use strict';


    angular
        .module('app')
        .config(config)
        .run([
            '$rootScope',  function ($rootScope) {
                
            }
        ]);

    config.$inject = ['$locationProvider'];
    function config($locationProvider: angular.ILocationProvider): void {
        $locationProvider.html5Mode(false);
    }
})();  