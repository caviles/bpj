// <reference path='../Scripts/typings/angularjs/angular.d.ts' />

((): void => {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.routes',
            'app.entity',
            'app.services',
            'app.token',
            'app.authentication'
            

        ]);
})();