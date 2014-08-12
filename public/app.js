angular.module('MyApp', 
               [//'ipCookie',
                   'ngCookies', 
                'ngResource', 
                'ngMessages', 
                'ngRoute', 
                'mgcrea.ngStrap'])

.config(['$locationProvider', '$routeProvider', //'$cookieProvider',
         function($locationProvider, $routeProvider //, $cookies
         ) {


     
         /* built-in AngularJS service for configuring 
            application linking paths */
         $locationProvider.html5Mode(true);

         $routeProvider
             .when('/login', {
                 templateUrl: 'views/login.html',
                 controller: 'LoginCtrl'
             })

             .when('/games', {
                 templateUrl: 'views/games.html',
                 controller: 'GamesCtrl'
             })

             .when('/signup', {
                 templateUrl: 'views/signup.html',
                 controller: 'SignupCtrl'
             })

             .when('/teams', {
                 templateUrl: 'views/teams.html',
                 controller: 'TeamsCtrl'
             })

             .when('/users', {
                 templateUrl: 'views/users.html',
                 controller: 'UsersCtrl'
             })

             .otherwise({
                redirectTo: '/'
             });
     }]);