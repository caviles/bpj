/// <reference path="services/cookie.service.ts" />
((): void => {
    'use strict';

    angular
        .module('app.routes', []);

    angular
        .module('app.routes')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
        

    ];

   

    function config(
        $routeProvider: angular.route.IRouteProvider,
        $locationProvider: angular.ILocationProvider
       

    ): void {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'app.token.TokenController',
                controllerAs: 'vm',
                resolve: {
                    hello
    
                }
            }).when('/login', {
                templateUrl: 'views/login.html',
                controller: 'app.authentication.AuthenticationController',
                controllerAs: 'vm',
                resolve: {
                
                }
                
            }).when('/access_token', {
                templateUrl: 'views/login.html',
                controller: 'app.authentication.AuthenticationController',
                controllerAs: 'vm',
                resolve: {

                }

            }).when('login', {
                templateUrl: 'views/login.html',
                controller: 'app.authentication.AuthenticationController',
                controllerAs: 'vm',
                resolve: {

                }

            }).when('access_token', {
                templateUrl: 'views/login.html',
                controller: 'app.authentication.AuthenticationController',
                controllerAs: 'vm',
                resolve: {

                }

            }).otherwise({ redirectTo: '/' });

        

    }

   

    function getRouteParams($route: angular.route.IRouteService): any {
        return $route.current.params;
    }

    function hello() {
        alert('2222');

    }
})();