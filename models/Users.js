module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {


        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        UserName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Users.prototype.validPassword = function (password) {

        console.log("Password from the DB:", this.password)
        console.log("Password from the Client :", password)
        return (this.Password === password);
    }
    return Users;
}