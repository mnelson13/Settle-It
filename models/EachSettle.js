module.exports = function(sequelize, DataTypes){
   var EachSettle = sequelize.define("EachSettle",{
       Voters:{
           type: DataTypes.INTEGER,
           allowNull: false
       },
       HasVoted:{
           type: DataTypes.BOOLEAN,
           allowNull: false
       },
       WhichSide:{
           type: DataTypes.BOOLEAN,
           allowNull: false
       },
       SettleID:{
           type: DataTypes.INTEGER,
           allowNull:false
       }
   })
   return EachSettle;
}