'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cidades.init({
    cidade_nome: DataTypes.STRING,
    cidade_uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cidades',
  });
  return Cidades;
};