/// <reference path="../entity/entity.service.ts" />
/// <reference path="../utils/utils.ts" />
module app.services {
    'use strict';
     //TODO: create all post and gets for these 

    export interface IProfileService {
        viewCurrentUserProfile(): angular.IHttpPromiseCallbackArg<entity.IProfile>;
        viewOtherProfile(token: string): angular.IHttpPromiseCallbackArg<entity.IProfile>;
        
    }

    export class ProfileService implements IProfileService {
        static $inject = [
            '$http'
        ];
        

        constructor(

            private $http: angular.IHttpService

        ) {


        }

      
        viewCurrentUserProfile(): angular.IHttpPromiseCallbackArg<entity.IProfile> {
            return this.viewOtherProfile('me');

        }

        viewOtherProfile(uid: string): angular.IHttpPromiseCallbackArg<entity.IProfile> {
            return this.$http
                .get('https://api.stackexchange.com/2.2/users/'+ uid +'?site=stackoverflow')
                .then((response: angular.IHttpPromiseCallbackArg<entity.IProfile>): entity.IProfile => {


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