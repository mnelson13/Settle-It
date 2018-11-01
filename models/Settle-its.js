module.exports = function(sequelize, DataTypes){

    var Settle_Its = sequelize.define("Settle_Its", {
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
            type: DataTypes.INT,
            allowNull: false,
            defaultValue: 0
        },

        Side_B_Points: {
            type: DataTypes.INT,
            allowNull: false,
            defaultValue: 0
        }
    })
    return Settle_Its;
}