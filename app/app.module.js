// <reference path='../Scripts/typings/angularjs/angular.d.ts' />
(function () {
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
