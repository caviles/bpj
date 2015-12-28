/// <reference path="../entity/entity.service.ts" />
module app.authentication {
    'use strict';


    interface IAuthentication {
        login(): void;

    }

    class AuthenticationController implements IAuthentication {

        tokenName: string = 'access_token';

        static $inject = [
            '$route',
            '$location',
            'app.services.CookieService'

        ];

        constructor(
            private $route: angular.route.IRouteService,
            private $location: angular.ILocaleService,
            private cookies: app.services.ICookieService

        ) {

              this.login();
        }

       
        /*
        slice the url http://caviles.github.io/bpj/index.html#/login#access_token=HehOHQooaUCcS(RBcA4rhw))&expires=86399
        */
        login() {
           
            var params = new app.entity.LoginParams();
            if (location.hash.indexOf(this.tokenName)>0)
                params.accesstoken = window.location.hash.slice(15).split('&')[0];
            this.cookies.setToken(params.accesstoken);
            console.log(this.cookies.getToken());
        }


        logout() {

            var params = new app.entity.LoginParams();
            if (location.hash.indexOf(this.tokenName) > 0)
                params.accesstoken = window.location.hash.slice(15).split('&')[0];
            this.cookies.setToken(params.accesstoken);
            console.log(this.cookies.getToken());
        }


    }

    angular
        .module('app.authentication')
        .controller('app.authentication.AuthenticationController', AuthenticationController);
}
