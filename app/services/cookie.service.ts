/// <reference path="../entity/entity.service.ts" />
/// <reference path="../utils/utils.ts" />
module app.services {
    'use strict';


    export interface ICookieService {
        getToken():string;
        setToken(token: string);

    }

    export class CookieService implements ICookieService {
        static $inject = [
            '$cookies'
        ];
        

        constructor(

            private $cookies: angular.cookies.ICookiesService

        ) {


        }

       
        getToken(): string {
            return this.$cookies.get("access_token");
        }

        setToken(token: string) {
            this.$cookies.put("access_token", token);
        }


    }

    angular
        .module('app.services')
        .service('app.services.CookieService', CookieService);


}