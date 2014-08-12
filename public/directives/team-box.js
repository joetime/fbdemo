angular.module('MyApp')
.directive('teamBox', ['Team', function(Team) {

    function link(scope, element, attrs) {
        
        scope.save = function () {
            console.log(scope.team);
            
            scope.team.$update(
                {id: scope.team._id, abbr: 'test'}
                , 
              function (suc) {
                console.log(suc);
              },
              function (err) {
                console.log(err);
              }
            );
            
        };
    } //end link
    

    return {
        restrict: 'E',
        link: link,
        scope: {
            team: '='
        },
        templateUrl: 'directives/team-box.html'
    };
  }]);

angular.module('MyApp')
.directive('toNumber', function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$parsers.push(function (value) {
                    return parseFloat(value || '');
                });
            }
        };
    });