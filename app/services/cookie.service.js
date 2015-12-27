/// <reference path="../entity/entity.service.ts" />
/// <reference path="../utils/utils.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var CookieService = (function () {
            function CookieService($cookies) {
                this.$cookies = $cookies;
            }
            CookieService.prototype.getToken = function () {
                return this.$cookies.get("access_token");
            };
            CookieService.prototype.setToken = function (token) {
                this.$cookies.put("access_token", token);
            };
            CookieService.$inject = [
                '$cookies'
            ];
            return CookieService;
        })();
        services.CookieService = CookieService;
        angular
            .module('app.services')
            .service('app.services.CookieService', CookieService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
