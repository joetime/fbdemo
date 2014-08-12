angular.module('MyApp')
  .controller('AddCtrl', ['$scope', '$alert', 'Team', function($scope, $alert, Team) {
    
      //console.log(Team);
      
      $scope.addTeam = function() {
        
        //console.log('AddCtrl:addTeam', $scope)
        
      Team.save({ 
          teamName: $scope.teamName, 
          teamCity: $scope.teamCity, 
          teamLogoUrl: $scope.teamLogoUrl,
          teamAbbr: $scope.teamAbbr  
      },
        function() {
            console.log('AddCtrl:addTeam:success');
          $scope.showName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'TV show has been added.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function(response) {
            console.log('AddCtrl:addTeam:error');
          $scope.showName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    };
  }]);