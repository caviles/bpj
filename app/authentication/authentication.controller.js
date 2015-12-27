/// <reference path="../entity/entity.service.ts" />
var app;
(function (app) {
    var authentication;
    (function (authentication) {
        'use strict';
        var AuthenticationController = (function () {
            function AuthenticationController($route, cookies) {
                this.$route = $route;
                this.cookies = cookies;
                this.login();
            }
            AuthenticationController.prototype.login = function () {
                var routeParams = this.$route.current.params;
                var params = new app.entity.LoginParams();
                if (routeParams['access_token'])
                    params.accesstoken = routeParams['access_token'];
                this.cookies.setToken(params.accesstoken);
                console.log(this.cookies.getToken());
            };
            AuthenticationController.$inject = [
                '$route',
                'app.services.CookieService'
            ];
            return AuthenticationController;
        })();
        angular
            .module('app.authentication')
            .controller('app.authentication.AuthenticationController', AuthenticationController);
    })(authentication = app.authentication || (app.authentication = {}));
})(app || (app = {}));
