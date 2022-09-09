const Sequelize = require('sequelize');
const { sequelize } = require('../db');

// We can can also create role table which will map to user
module.exports = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: Sequelize.STRING,
  role: {
    type: Sequelize.ENUM('ADMIN', 'SELLER', 'SUPPORTER', 'CUSTOMER'),
  },
  permission: Sequelize.STRING,
});
