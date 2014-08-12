angular.module('MyApp')
.controller(
    'LoginCtrl',
    ['$cookies', '$scope', 'Auth', '$rootScope', 
    function($cookies, $scope, Auth, $rootScope) {
    
        console.log('$rootScope.currentUser', $rootScope.currentUser);
      
        if ($rootScope.currentUser) {
            $scope.email = $rootScope.currentUser.email;
        }
        else if ($cookies.lastEmail) {
            $scope.email = $cookies.lastEmail;
            $scope.password = $cookies.lastPassword;
        }
        
        $scope.login = function() {
            Auth.login({
                email: $scope.email,
                password: $scope.password
            });
        };
  }]);