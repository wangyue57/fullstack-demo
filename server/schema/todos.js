/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todos', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    text: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    completed: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'todos'
  });
};
