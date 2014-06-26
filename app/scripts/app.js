'use strict';

angular.module('passportpracticeApp', [
  'ngSanitize',
  'ngRoute',
  'ngCookies'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        authenticate: true
      })
      .when('/login' , {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
