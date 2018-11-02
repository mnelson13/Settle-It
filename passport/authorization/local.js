
//configure local authentication strategy with user adding their username and password. this strategy requires a callback "verify" which accepts their credentials and calls "done" providing a user.
//documentation used from passport.js.org//
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  //more configuration and verify callback that helps to find the user that has a set of credentials, username and password//
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); } //occurs if database not available//
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
        return done(null, user);
    });
  }
));

//possible form that we can style later. Use for user to enter their credentials and log in//
//<form action="/login" method="post">
//  <div>
//      <label>Username:</label>
//      <input type="text" name="username"/>
//  </div>
//  <div>
//      <label>Password:</label>
//      <input type="password" name="password"/>
//  </div>
//  <div>
//      <input type="submit" value="Log In"/>
//  </div>
//</form>

