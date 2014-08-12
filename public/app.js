angular.module('MyApp', 
               ['ngCookies', 
                'ngResource', 
                'ngMessages', 
                'ngRoute', 
                'mgcrea.ngStrap',
               //'my.resource'
               ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    
      /* built-in AngularJS service for configuring 
      application linking paths */
      $locationProvider.html5Mode(true);

      $routeProvider
          .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
          })
          .when('/shows/:id', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
          })
          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
          })
          .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignupCtrl'
          })
          .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddCtrl'
          })
          .when('/teams', {
            templateUrl: 'views/teams.html',
            controller: 'TeamCtrl'
          })
      .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UsersCtrl'
          })
            .when('/games', {
            templateUrl: 'views/games.html',
            controller: 'GamesCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
  }]);