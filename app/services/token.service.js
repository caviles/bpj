/// <reference path="../entity/entity.service.ts" />
/// <reference path="../utils/utils.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var TokenService = (function () {
            function TokenService($rootScope, $location, $http, cookies) {
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$http = $http;
                this.cookies = cookies;
                this.loginUrl = 'https://stackexchange.com/oauth/dialog?client_id=6166&scope=private_info&redirect_uri=https://stackexchange.com/oauth/login_success';
                // this.getToken();
            }
            TokenService.prototype.logout = function () {
                return this.$http
                    .get('access-tokens/{' + this.cookies.getToken() + '}/invalidate')
                    .then(function (response) {
                    return response.data;
                }, function (error) {
                    return error.data;
                });
            };
            TokenService.prototype.getToken = function () {
                window.location.replace(this.loginUrl);
            };
            TokenService.$inject = [
                '$rootScope',
                '$location',
                '$http',
                'app.services.CookieService'
            ];
            return TokenService;
        })();
        angular
            .module('app.services')
            .service('app.services.TokenService', TokenService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
