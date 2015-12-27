/// <reference path="../entity/entity.service.ts" />
(function () {
    'use strict';
    angular
        .module('app.authentication', []);
})();
var app;
(function (app) {
    var authentication;
    (function (authentication) {
        'use strict';
        var AuthenticationController = (function () {
            function AuthenticationController($route, cookies) {
                this.$route = $route;
                this.cookies = cookies;
                //  this.getToken();
            }
            AuthenticationController.prototype.login = function () {
                //var routeParams = this.$route.current.params;
                //var params = new app.entity.LoginParams();
                //if (routeParams['n'])
                //    params.accesstoken = routeParams['access_token'];
                //this.cookies.setToken(params.accesstoken);
                alert('hi');
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
