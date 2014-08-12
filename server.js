var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// used for authentication
var bcrypt = require('bcryptjs');


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// error handler ??
app.use(function(err, req, res, next) {
    console.log("ERROR TOP")
    console.error(err.stack);
    res.send(500, { message: err.message });
});



/* Database */

var mongoose = require('mongoose');

var teamSchema = require('./data/team.js').initTeam(mongoose);  
var Team = mongoose.model('Team', teamSchema);

var gameSchema = require('./data/game.js').initGame(mongoose);
var Game = mongoose.model('Game', gameSchema);

var userSchema = require('./data/user.js').initUser(mongoose, bcrypt);
var User = mongoose.model('User', userSchema);

mongoose.connect('localhost');



/* API Routes */

require('./api.generic.js').initRoutes(app, User, 'users');
require('./api.generic.js').initRoutes(app, Team, 'teams');
require('./api.generic.js').initRoutes(app, Game, 'games');
require('./api.auth.js').initRoutes(app, User, bcrypt);

// Catch-all route

app.get('*', function (req, res, next) {

    console.log('req.url', req.url);
    //if user is authenticated in the session, carry on 
    if (req.url == '/login' || req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
});

// all other routes: The details are configured in app.js
app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
});

// Error handler
app.use(function(err, req, res, next) {
    console.log("ERROR BOTTOM");
    console.error(err.stack);
    res.send(500, { message: err.message });
});

/* RUN IT!! */

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});