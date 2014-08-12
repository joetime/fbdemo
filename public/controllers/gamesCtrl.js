angular.module('MyApp')
  .controller('GamesCtrl', ['$scope', 'Team', 'Game', function($scope, Team, Game) {
      
      $scope.weeks = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                     11, 12, 13, 14, 15, 16, 17 ];
      $scope.weekFilter = 1;
      $scope.resetWeekFilter = function () {
        $scope.weekFilter = 1;  
      };
      $scope.gameFilters = function (game) {
          //console.log($scope.weekFilter);
          return $scope.weekFilter == 0 || game.weekNumber == $scope.weekFilter;
      };
      
      $scope.spreadValues = [];
      (function setSpreadValues () {
          for (var i = 0; i < 30; i+=.5)
            $scope.spreadValues.push(i);       
      })();
      
      $scope.scoreValues = [];
      (function setScoreValues () {
          for (var i = 0; i < 100; i++)
            $scope.scoreValues.push(i);       
      })();
      
      $scope.games = Game.query();
    
  }]);