/// <reference path="../entity/entity.service.ts" />

 //TODO: map this to view and test route implement all functions add to module build and add scripts
module app.questions {
    'use strict';


    export interface IQuestions{
        getToken(): void;
       
    }

    class QuestionsController implements IQuestions {
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
        .module('app.questions')
        .controller('app.questions.QuestionsController', QuestionsController);
}