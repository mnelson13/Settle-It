var path = require('path')
var db = require('../models')
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app){

    app.get("/", function(req, res) {
        
        db.SettleIts.findAll({
            where: {
                Side_A: { [Op.ne]: null},
                Side_B: { [Op.ne]: null},
            }
        })
        .then((result) => {

            var settleitobj = {
                SettleIts: result
            }
            res.render("index", settleitobj);
        })
    });

    app.get("/index.html", function(req, res) {
        
        db.SettleIts.findAll({
            where: {
                Side_A: { [Op.ne]: null},
                Side_B: { [Op.ne]: null},
            }
        })
        .then((result) => {

            var settleitobj = {
                SettleIts: result
            }
            res.render("index", settleitobj);
        })
    });

    // app.get("/create.html", function(req, res){
    //     res.render("create")
    // });

    // app.get("/Account.html", function(req, res){
    //     res.render("account")
    // })

}