module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define("Users",{

        Email:{
            type: DataTypes.STRING,
            allowNull: false
        },

        Password:{
            type: DataTypes.STRING,
            allowNull: false
        },

        UserName:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Users;
}