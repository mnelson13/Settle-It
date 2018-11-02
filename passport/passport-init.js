//this area needs work//
var passport = require('passport');
var session       = require("express-session")({ secret: "ctiosckzhgkyntvitviaw4", resave: false, saveUninitialized: false  });

var User = require ('./models/user');

module.exports = function(expressApp) {
    passport.use(require('./authorization/local'))

//===============BOILERPLATE below from Joes code 


passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

expressApp.use(session);  

//initialize Passport and let Express know about it
expressApp.use(passport.initialize());
// Set up sessions 
expressApp.use(passport.session());


//==============END BOILERPLATE from Joes code

expressApp.use(
    require(".routes/local-authentication-routes")(passport))
    )
return passport;
}
