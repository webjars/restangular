/*global requirejs */

requirejs.config({
    paths: { 'restangular': webjars.path('restangular', 'restangular') },
    shim: { 'restangular': [ 'webjars!angular.js', 'webjars!lodash.js' ] }
});
