angular.module('MyApp')
  .factory('Auth', ['$http', '$location', '$rootScope', '$alert', '$cookies',
    function($http, $location, $rootScope, $alert, $cookies) {
      
        //$rootScope.currentUser = $cookieStore.get('user');

      return {
          
        login: function(user, onsuccess, onerror) {
          return $http.post('/api/login', user)
            .success(function(data) {
              $rootScope.currentUser = data;
              $location.path('/');
              console.log('setting user cookie');
                $cookies.lastEmail = user.email;
                $cookies.lastPassword = user.password;
              $alert({
                title: 'Cheers!',
                content: 'You have successfully logged in.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
          
            .error(function() {
              $alert({
                title: 'Error!',
                content: 'Invalid username or password.',
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },
        
        logout: function() {
          return $http.get('/api/logout').success(function() {
            $rootScope.currentUser = null;
            $cookieStore.remove('user');
            $alert({
              content: 'You have been logged out.',
              placement: 'top-right',
              type: 'info',
              duration: 3
            });
          });
        }
      };
    }]);