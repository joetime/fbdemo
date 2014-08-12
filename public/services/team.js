 angular.module('MyApp')
 .factory( 'Team', [ '$resource', function( $resource ) {
   return $resource('/api/teams/:id', { id: '@id' });
 }]);