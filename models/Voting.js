module.exports = function(sequelize, DataTypes){
    var Voting = sequelize.define("Voting",{
        //settle ID
        Settle:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: "uniquevoter-settlepair"
        },

        //voter ID
        Voter:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: "uniquevoter-settlepair"
        },

    })
    Voting.associate = function(models) {
        Voting.belongsTo(models.SettleIts)
        Voting.belongsTo(models.Users)
      };
 
    return Voting;
 }