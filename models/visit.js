'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  visit.init({
    id_user: DataTypes.INTEGER,
    id_place: DataTypes.INTEGER,
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'visit',
  });
  return visit;
};