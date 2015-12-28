/// <reference path="../entity/entity.service.ts" />
var app;
(function (app) {
    var authentication;
    (function (authentication) {
        'use strict';
        var AuthenticationController = (function () {
            function AuthenticationController($route, $location, cookies) {
                this.$route = $route;
                this.$location = $location;
                this.cookies = cookies;
                this.tokenName = 'access_token';
                this.login();
            }
            /*
            slice the url http://caviles.github.io/bpj/index.html#/login#access_token=HehOHQooaUCcS(RBcA4rhw))&expires=86399
            */
            AuthenticationController.prototype.login = function () {
                var params = new app.entity.LoginParams();
                if (location.hash.indexOf(this.tokenName) > 0)
                    params.accesstoken = window.location.hash.slice(15).split('&')[0];
                this.cookies.setToken(params.accesstoken);
                console.log(this.cookies.getToken());
            };
            AuthenticationController.prototype.logout = function () {
                var params = new app.entity.LoginParams();
                if (location.hash.indexOf(this.tokenName) > 0)
                    params.accesstoken = window.location.hash.slice(15).split('&')[0];
                this.cookies.setToken(params.accesstoken);
                console.log(this.cookies.getToken());
            };
            AuthenticationController.$inject = [
                '$route',
                '$location',
                'app.services.CookieService'
            ];
            return AuthenticationController;
        })();
        angular
            .module('app.authentication')
            .controller('app.authentication.AuthenticationController', AuthenticationController);
    })(authentication = app.authentication || (app.authentication = {}));
})(app || (app = {}));
