'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  TodoItem.init(
    {
      content: { type: DataTypes.STRING, allowNull: false },
      complete: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "TodoItem",
    }
  );

      TodoItem.associate = (models) => {
        TodoItem.belongsTo(models.Todo, {
          foreignKey: "todoId",
          onDelete: "CASCADE",
        });
      };

  return TodoItem;
};