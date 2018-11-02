const Sequelize = require('sequelize');
//
const DB_DB  = 'settleit',
DB_USER='root' 
DB_PASS='root'


const sequelize = new Sequelize(DB_DB, DB_USER, DB_PASS, {
  host: '127.0.0.1',
  dialect: 'mysql',//|'sqlite'|'postgres'|'mssql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

module.exports = sequelize;