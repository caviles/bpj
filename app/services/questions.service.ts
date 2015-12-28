/// <reference path="../entity/entity.service.ts" />

module app.services {
    'use strict';

    //TODO: answer question and favorite
    export interface IQuestionService {
        favoriteQuestion(): string;
        getQuestions(): angular.IHttpPromiseCallbackArg<entity.IQuestions>;
        getQuestion(qid: string): angular.IHttpPromiseCallbackArg<app.entity.IQuestion>;
        answerQuestion();
        sort(sortType: app.entity.SortType): angular.IHttpPromiseCallbackArg<entity.IQuestions> ;
        search(q: string): angular.IHttpPromiseCallbackArg<entity.IQuestions>;


    }

    export class QuestionService implements IQuestionService {
        static $inject = [
            '$http'
        ];


        constructor(

            private $http: angular.IHttpService

        ) {


        }


        ///2.2/questions/13125236/favorite
        favoriteQuestion(): string { throw new Error("Not implemented"); }




      
        //todo use tags to create tags cloud

        getQuestions(): angular.IHttpPromiseCallbackArg<entity.IQuestions> {
            return this.$http
                .get('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow')
                .then((response: angular.IHttpPromiseCallbackArg<entity.IQuestions>): entity.IQuestions => {


                    return response.data;
                }, () => {
                    return null;
                });

        }

        getQuestion(qid: string): angular.IHttpPromiseCallbackArg<app.entity.IQuestion> {
            return this.$http
                .get('http://api.stackexchange.com//2.2/questions/' + qid + '/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody')
                .then((response: angular.IHttpPromiseCallbackArg<entity.IQuestion>): entity.IQuestion => {


                    return response.data;
                }, () => {
                    return null;
                });

        }

        //https://api.stackexchange.com/docs/create-answer
        ///2.2/questions/ { id } / answers / add
        answerQuestion() { }


       sortStr: string;

        sort(sortType: app.entity.SortType): angular.IHttpPromiseCallbackArg<entity.IQuestions> {

            switch (sortType) {
                case app.entity.SortType.Creation:
                    this.sortStr = 'creation';
                break;
                case  app.entity.SortType.Hot:
                    this.sortStr = 'hot';
                    break;
                case app.entity.SortType.Month:
                    this.sortStr = 'month';
                    break;
                case app.entity.SortType.Votes:
                    this.sortStr = 'votes';
                    break;
                case app.entity.SortType.Week:
                    this.sortStr = 'week';
                    break;
            default:
                    this.sortStr = 'activity';
                    break;
            }

            return this.$http
                .get('http://api.stackexchange.com/2.2/questions?order=asc&sort=' + this.sortStr + '&site=stackoverflow ')
                .then((response: angular.IHttpPromiseCallbackArg<entity.IQuestions>): entity.IQuestions => {


                    return response.data;
                }, () => {
                    return null;
                });

        }


        
        search(q: string): angular.IHttpPromiseCallbackArg<entity.IQuestions> {

          

            return this.$http
                .get('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q='+q+'site=stackoverflow')
                .then((response: angular.IHttpPromiseCallbackArg<entity.IQuestions>): entity.IQuestions => {


                    return response.data;
                }, () => {
                    return null;
                });

        }
    }

    angular
        .module('app.services')
        .service('app.services.CookieService', CookieService);


}