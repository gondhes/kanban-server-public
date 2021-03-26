'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Title should not be empty`
        }
      }
    },
    category: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references : {
        model : "User",
        key : "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
    hooks : {
      beforeCreate (instance) {
        instance.category = "backlog"
      }
    }
  });
  return Task;
};