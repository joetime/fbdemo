angular.module('MyApp')
  .factory('Test', ['$resource', function($resource) {
    return $resource('/api/tests/:id', {id: '@id'});
  }]);

 angular.module('MyApp')
 .factory( 'Team', [ '$resource', function( $resource ) {
   return $resource('/api/teams/:id', { id: '@id' });
 }]);

 angular.module('MyApp')
 .factory( 'Game', [ '$resource', function( $resource ) {
   return $resource('/api/games/:id', { id: '@id' });
 }]);

 angular.module('MyApp')
 .factory( 'User', [ '$resource', function( $resource ) {
   return $resource('/api/users/:id', { id: '@id' });
 }]);