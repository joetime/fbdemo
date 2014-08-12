angular.module('MyApp')
  .controller('MainCtrl', ['$scope', 'Team', 'Test', function($scope, Team, Test) {

    $scope.tests = [];
    
    $scope.getAll = function () {
        Test.query(function (tests) {
            $scope.tests = tests;
        })
    };
      
    $scope.new = function() {
        $scope.tests.push({ $$editMode : true });
    };
      
    
    $scope.delete = function(test) {
        console.log('delete: ', test)

        Test.delete({id :test._id }, function (resp) {
            $scope.getAll();
        });
    };
      
      $scope.cleanCopy = {};
      $scope.startEdit = function(test) {
          console.log('startEdit');
          angular.copy(test,$scope.cleanCopy);
          test.$$editMode=true;
      };
      $scope.saveEdit = function(test) {
          console.log('saveEdit');
          Test.save({ id: test._id }, test);
          $scope.cleanCopy = {};
          test.$$editMode=false;
      };
      $scope.cancelEdit = function(test) {
          console.log('cancelEdit');
          console.log(test);
          console.log($scope.cleanCopy);
          angular.copy($scope.cleanCopy, test);          
          test.$$editMode = false;
          
      };
      
//      
//    $scope.query = function() {
//        Test.query({});
//    };
//    $scope.remove = function() {
//        Test.remove(1);
//    };
      
    
     
  }]);