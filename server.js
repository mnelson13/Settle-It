// *** Dependencies
// =============================================================
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

// Static directory
app.use(express.static("public"));

//setup passport 
const passport = required('./passport-init')(app);
const PORT = 3000

//passport, set up the forbidden route...when authorization fails, all protected routes will take this path//
app.get('/forbidden', (req,res) => {
  res.send(403, 'You are not authorized')
});

// Routes
// =============================================================
//require(user routes)(app);
//require(post routes)(app);
//require(html routes)(app);

//passport routes, protected and public//
const protectedRoutes = require('.routes/protected-routes');
const pubRoutes = require('./routes.public-routes');
app.use(pubRoutes);
app.use(protectedRoutes);

// Syncing sequelize models and then starting the Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});