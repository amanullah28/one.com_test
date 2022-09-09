const Sequelize = require('sequelize');
let db = {};
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});
db.sequelize = sequelize;

module.exports = db;
