/// <reference path="../entity/entity.service.ts" />
var app;
(function (app) {
    var token;
    (function (token) {
        'use strict';
        var TokenController = (function () {
            function TokenController($scope, $rootScope, $location, $http, $cookies) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$http = $http;
                this.$cookies = $cookies;
            }
            TokenController.prototype.getToken = function () {
                var model = {
                    'f': 'json',
                    'client_id': 'YOUR_APPLICATIONS_CLIENT_ID',
                    'client_secret': 'YOUR_APPLICATIONS_CLIENT_SECRET',
                    'grant_type': 'client_credentials',
                    'expiration': '1440'
                };
                return this.$http
                    .post('https://www.arcgis.com/sharing/rest/oauth2/token/', model)
                    .then(function (response) {
                    return response.data;
                }, function (error) {
                    return error.data;
                });
            };
            TokenController.$inject = [
                '$scope',
                '$rootScope',
                '$location',
                '$http',
                '$cookies'
            ];
            return TokenController;
        })();
        angular
            .module('app.token')
            .controller('app.token.TokenController', TokenController);
    })(token = app.token || (app.token = {}));
})(app || (app = {}));
