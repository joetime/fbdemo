angular.module('MyApp')
  .directive('fbNavBar', ['Auth', function(Auth) {
    
      function link(scope, element, attrs) {
        scope.logout = function() {
            Auth.logout();
        };
      }
        
      return {
        restrict: 'E',
        templateUrl: './directives/navbar.html',
        link: link
    };
  }]);