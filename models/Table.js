const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Table extends Model {}

Table.init(
  {

  },
  {
    sequelize
  }
);

module.exports = Table;