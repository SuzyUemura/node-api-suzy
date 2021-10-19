'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnderecosTipos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EnderecosTipos.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EnderecosTipos',
  });
  return EnderecosTipos;
};