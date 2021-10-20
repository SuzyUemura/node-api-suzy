'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Telefones.belongsTo(models.TelefonesTipos, {
          as: 'telefone_tipos',
          foreignKey: 'telefone_tipo'
        })
    }
  };
  Telefones.init({
    ddd: DataTypes.STRING,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Telefones',
  });
  return Telefones;
};