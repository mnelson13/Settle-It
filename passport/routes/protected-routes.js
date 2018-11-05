var router = require('express').Router();

var User = require('../../models/Users');
var db = require('../../models')
var Sequelize = require("sequelize");
var Op = Sequelize.Op;


//these 2 lines ensure all the routes on this router are protected. 
router.use(require('./protection'))

router.get("/create.html",
    function(req, res) {
    db.Users.findAll({
        where: {
            id: { [Op.ne]: req.user.id},
        }
    })
    .then((result) => {

        var usersobj = {
            Users: result
        }
        res.render("create", usersobj);
    })
})

router.get("/account.html",
    function(req, res) {
    db.SettleIts.findAll({
        where: {
            [Op.or]: [{User_A: req.user.id}, {User_B: req.user.id}]
        }
    })
    .then((result) => {
        let complete = [];
        let open = [];

        for(i in result){
            if(result[i].User_B === req.user.id && result[i].Side_B === null){
                open.push(result[i]);
            } else {
                complete.push(result[i]);
            }
        }

        res.render("account", {
            SettleIts: complete,
            Respond: open
        });
    })
});

router.route("/info")
    .get(  (req,res) => res.json(req.user) )
    .post( (req,res) => res.json(req.user) )

router.route("/ping")
    .get(  (req,res) => res.send(`pong`))

router.route("/greet")
    .get( (req, res) => res.send(`Hello, ${req.user.username}. Your email is ${req.user.email_address}`))

router.route("/self")
    .put( (req,res) => {
        //make sure you only update the currently logged in user
        const where = {id:req.user.id};
        //grab data from the request body
        const updateData = {
            username: (req.body.username? req.body.username: req.user.username),
            password: (req.body.password? req.body.password: req.user.password),
            email_address : (req.body.email_address? req.body.email_address: req.user.email_address),

        }
        User.update(where, updateData)
            .then((dbResult) => {
                res.json(dbResult);
            })
            .catch(err => res.json(500, err))
    })
module.exports = router;