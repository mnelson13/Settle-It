var db = require('../models')

module.exports = function(app){

    //all of the settle its
    app.get("/api/settles", function(req, res){

        db.SettleIts.findAll({})

        .then((result) => {

            res.send(result);
            res.end();
        })
    });

    //gets all the info on a selected settle it
    app.get('/api/getOne/:settleID', function(req, res) {

        db.SettleIts.findOne({
            where:{
                id: req.params.settleID
            }

        }).then((result)=>{

            res.json(result);
            res.end()
        })
    });

    //gets a list of settleit topics of a limited ammount 
    app.get("/api/homelist", function(req, res){
        var list =[];
        db.SettleIts.findAll({limit: 15})

        .then((result) => {
            for(var i = 0; i < result.length; i++){
            list.push(result[i].Topic);
            }
            res.json(list);
            res.end();
        })
    });

    //sends back a json obj of all the users
    app.get("/api/users", function(req, res){

        db.Users.findAll({})
        .then((result)=>{

            res.json(result);
            res.end();
        })
    });

    //sends back a json obj of everthing in voters table
    app.get("/api/voters", function(req, res){

        db.Voters.findAll({})
        .then((result)=>{

            res.json(result);
            res.end();
        })
    });

    //sends back a single item in voters table
    app.get("/api/voters/:id", function(req, res){

        db.Voters.findOne({
            where:{
                id: req.params.id
            }
        })
        .then((result)=>{

            res.json(result);
            res.end();
        })
    });

    

    app.post("/api/Users", function(req, res) {
        console.log(req.body);
        db.Users.create({
          Email: req.body.Email,
          password: req.body.password,
          userName: req.body.userName
        })
          .then(function(dbUsers) {
            res.json(dbUsers);
          }).catch(err => {
              if (err) throw err
          })
      });
    
      app.post("/api/Settle", function(req, res) {
        console.log(req.body);
        db.SettleIts.create({
          Topic: req.body.Topic,
          Side_A: req.body.Side_A,
          Side_B: "",
          Side_A_Points: 0,
          Side_B_Points: 0,
          User_A: "",
          User_B: "",
        })
          .then(function(dbSettle) {
            res.json(dbSettle);
          });
      });
    
      app.put("/api/settles/votes/sideA/:id", function(req, res){

          console.log(req.body);

          db.SettleIts.update(
              req.body,
            {
            where:{
                id: req.params.id
            },
          })
          .then(function(dbSettle) {
            res.json(dbSettle);
          });
      })

      app.put("/api/settles/votes/sideB/:id", function(req, res){

        console.log(req.body);

        db.SettleIts.update(
            req.body,
          {
          where:{
              id: req.params.id
          },
        })
        .then(function(dbSettle) {
          res.json(dbSettle);
        });
    })
}