function initRoutes(app, User, bcrypt) 
{
    var session = require('express-session');
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    
    
    /* Middleware */
    
    app.use(session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
    // Adds cookie
    app.use(function(req, res, next) {
        if (req.user) {
            res.cookie('user', JSON.stringify(req.user));
        }
        next();
    });
    
    
    /* Use LocalStrategy to authenticate */
    
    passport.use(new LocalStrategy({ usernameField: 'email' }, 
        function(email, password, done) {
            User.findOne({ email: email }, function(err, user) {
                if (err) return done(err);
                if (!user) return done(null, false);

                user.comparePassword(password, function(err, isMatch) {
                    if (err) return done(err);
                    if (isMatch) return done(null, user);
                    return done(null, false);
                });
            });
        }));
    
    
    
    /* API Routes */
    
    app.post('/api/login', passport.authenticate('local'), function(req, res) {
        res.cookie('user', JSON.stringify(req.user));
        res.send(req.user);
    });
    
    app.get('/api/logout', function(req, res, next) {
        req.logout();
        res.send(200);
    });
    
    
    
    /* Helpers */
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}

module.exports.initRoutes = initRoutes;