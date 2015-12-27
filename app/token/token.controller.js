/// <reference path="../entity/entity.service.ts" />
var app;
(function (app) {
    var token;
    (function (token) {
        'use strict';
        var TokenController = (function () {
            function TokenController($scope, $rootScope, $location, $http //,
                ) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$http = $http;
                //  this.getToken();
            }
            TokenController.prototype.getToken = function () {
                //   this.tokenService.getToken();
                //  alert('hi');
            };
            TokenController.$inject = [
                '$scope',
                '$rootScope',
                '$location',
                '$http' //,
            ];
            return TokenController;
        })();
        angular
            .module('app.token')
            .controller('app.token.TokenController', TokenController);
    })(token = app.token || (app.token = {}));
})(app || (app = {}));
