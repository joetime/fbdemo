angular.module('MyApp')
  .controller('TeamCtrl', ['$scope', 'Team', function($scope, Team) {

    $scope.teams = Team.query();
    
    $scope.getAll = function () {
        Team.query(function (teams) {
            $scope.teams = teams;
        })
    };
      
    $scope.new = function() {
        $scope.teams.unshift({ $$editMode : true });
    };
      
    
    $scope.delete = function(team) {

        Team.delete({id :team._id }, function (resp) {
            $scope.getAll();
        });
    };
      
      $scope.cleanCopy = {};
      $scope.startEdit = function(team) {

          angular.copy(team,$scope.cleanCopy);
          team.$$editMode=true;
      };
      $scope.saveEdit = function(team) {

          Team.save({ id: team._id }, team);
          $scope.cleanCopy = {};
          team.$$editMode=false;
      };
      $scope.cancelEdit = function(team) {

          angular.copy($scope.cleanCopy, team);          
          team.$$editMode = false;
          
      };
  }]);