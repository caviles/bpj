/// <reference path="../entity/entity.service.ts" />
module app.authentication {
    'use strict';


    interface IAuthentication {
        login(): void;

    }

    class AuthenticationController implements IAuthentication {
        static $inject = [
            '$route',
            'app.services.CookieService'

        ];

        constructor(
            private $route: angular.route.IRouteService,
            private cookies: app.services.ICookieService

        ) {

              this.login();
        }


        login() {
            var routeParams = this.$route.current.params;
            var params = new app.entity.LoginParams();
            if (routeParams['access_token'])
                params.accesstoken = routeParams['access_token'];
            this.cookies.setToken(params.accesstoken);
            console.log(this.cookies.getToken());
        }



    }

    angular
        .module('app.authentication')
        .controller('app.authentication.AuthenticationController', AuthenticationController);
}
