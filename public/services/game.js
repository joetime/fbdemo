angular.module('MyApp')
 .factory( 'Game', [ '$resource', function( $resource ) {
   return $resource('/api/games/:id', { id: '@id' });
 }]);