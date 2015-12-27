/// <reference path="../entity/entity.service.ts" />


module app.token {
    'use strict';


    interface IToken {
        getToken(): void;
       
    }

    class TokenController implements IToken {
        static $inject = [
            '$scope',
            '$rootScope',
            '$location',
            '$http',
            'app.services.CookieService'

        ];


        constructor(
            private $scope: angular.IScope,
            private $rootScope: angular.IRootScopeService,
            private $location: angular.ILocationService,
            private $http: angular.IHttpService,
            private cookies: app.services.ICookieService
           // private tokenService: app.services.ITokenService
        ) {
            console.log('token ' + this.cookies.getToken());
            
        }

        
        getToken() {
         //   this.tokenService.getToken();
          //  alert('hi');
        }


       
    }

    angular
        .module('app.token')
        .controller('app.token.TokenController', TokenController);
}