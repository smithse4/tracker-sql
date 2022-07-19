const User = require('./User');
const Table = require('./Table');

Table.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Table
};