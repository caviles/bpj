/// <reference path="../entity/entity.service.ts" />
/// <reference path="../utils/utils.ts" />
module app.services {
    'use strict';


    export interface ITokenService {
        getToken() ;
       
    }

    class TokenService implements ITokenService {
        static $inject = [
            
            '$rootScope',
            '$location',
            '$http',
            'app.services.CookieService'

        ];
        loginUrl: string = 'https://stackexchange.com/oauth/dialog?client_id=6166&scope=private_info&redirect_uri=https://stackexchange.com/oauth/login_success';

        constructor(
            private $rootScope: angular.IRootScopeService,
            private $location: angular.ILocationService,
            private $http: angular.IHttpService,
            private cookies: app.services.ICookieService
           
        ) {

           // this.getToken();
        }

        logout(){
            return this.$http
                .get('access-tokens/{' + this.cookies.getToken()  +'}/invalidate')
                .then((response: angular.IHttpPromiseCallbackArg<entity.IResponseResult>): entity.IResponseResult => {
                    return response.data;
                }, (error: angular.IHttpPromiseCallbackArg<entity.IResponseResult>): entity.IResponseResult => {
                    return error.data;
                });
        }


        getToken() {
            window.location.replace(this.loginUrl);
        }


        
       
    }

    angular
        .module('app.services')
        .service('app.services.TokenService', TokenService);

   
}