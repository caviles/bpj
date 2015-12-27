/// <reference path="services/cookie.service.ts" />
(function () {
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
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'views/main.html',
            controller: 'app.token.TokenController',
            controllerAs: 'vm',
            resolve: {
                hello: hello
            }
        }).when('/login', {
            templateUrl: 'views/login.html',
            controller: 'app.authentication.AuthenticationController',
            controllerAs: 'vm',
            resolve: {}
        }).when('/access_token', {
            templateUrl: 'views/login.html',
            controller: 'app.authentication.AuthenticationController',
            controllerAs: 'vm',
            resolve: {}
        }).when('login', {
            templateUrl: 'views/login.html',
            controller: 'app.authentication.AuthenticationController',
            controllerAs: 'vm',
            resolve: {}
        }).when('access_token', {
            templateUrl: 'views/login.html',
            controller: 'app.authentication.AuthenticationController',
            controllerAs: 'vm',
            resolve: {}
        });
    }
    function getRouteParams($route) {
        return $route.current.params;
    }
    function hello() {
        alert('2222');
    }
})();
