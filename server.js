// *** Dependencies
// =============================================================
require('dotenv').config()

var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");


// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(require('cookie-parser')());
app.use(require('morgan')('combined'));

// // Static directory
// app.use(express.static("public"));

//setup passport 
const passport = require('./passport/passport-init')(app);

//passport, set up the forbidden route...when authorization fails, all protected routes will take this path//
app.get('/forbidden', (req,res) => {
  res.send(403, 'You are not authorized')
});

// Routes
// =============================================================
//require(user routes)(app);
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

//passport routes, protected and public//
const protectedRoutes = require('./passport/routes/protected-routes');
const pubRoutes = require('./passport/routes/public-routes');
app.use(pubRoutes);
app.use(protectedRoutes);

// Syncing sequelize models and then starting the Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});