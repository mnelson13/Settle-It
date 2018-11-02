module.exports = function(sequelize, DataTypes){

    var SettleIts = sequelize.define("SettleIts", {

        Topic: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Category:{
            type: DataTypes.STRING,
            allowNull: false
        },

        Side_A: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Side_B: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Side_A_Points:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },

        Side_B_Points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },

        User_A:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        User_B:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return SettleIts;
}