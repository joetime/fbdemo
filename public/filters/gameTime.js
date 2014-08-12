
angular.module('MyApp').
  filter('gameTime', function() {
    return function(date) {
      return moment(date).format('dddd MMM Do h:mm a');
    }
});