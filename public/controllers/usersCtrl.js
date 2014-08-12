angular.module('MyApp')
  .controller('UsersCtrl', ['$rootScope', '$location', '$scope', 'User', 
                            function($rootScope, $location, $scope, User) {

    if(!$rootScope.currentUser || $rootScope.currentUser.role != 'admin')
          $location.path('/login');
      
    $scope.users = User.query();
    
    $scope.getAll = function () {
        User.query(function (users) {
            $scope.users = users;
        })
    };
      
      // Add - Push a new object to front of list
    $scope.new = function() {
        $scope.users.unshift({ $$editMode : true,
                             active: true,
                             password: 'football' });
    };
      
    
    $scope.delete = function(user) {

        User.delete({id :user._id }, function (resp) {
            $scope.getAll();
        });
    };
      
      $scope.cleanCopy = {};
      $scope.startEdit = function(user) {

          angular.copy(user,$scope.cleanCopy);
          user.$$editMode=true;
      };
      $scope.saveEdit = function(user) {

          User.save({ id: user._id }, user);
          $scope.cleanCopy = {};
          user.$$editMode=false;
      };
      $scope.cancelEdit = function(user) {

          angular.copy($scope.cleanCopy, user);          
          user.$$editMode = false;
          
      };
  }]);