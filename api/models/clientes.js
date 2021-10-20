'use strict';
const {
  Model
} = require('sequelize');
const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.belongsTo(models.Telefones, {
        as: 'telefones',
        foreignKey: 'telefone'
      }),
      Clientes.belongsTo(models.Telefones, {
        as: 'celulares',
        foreignKey: 'celular'
      }),
      Clientes.belongsTo(models.Enderecos, {
        as: 'endereco_res',
        foreignKey: 'endereco_resid'
      }),
      Clientes.belongsTo(models.Enderecos, {
        as: 'endereco_comerc',
        foreignKey: 'endereco_comer'
      })
    }
  };
  Clientes.init({
    cliente_nome: DataTypes.STRING,
    cliente_nasc: {
      type: DataTypes.DATEONLY,
      get() {
        return moment(this.getDataValue("cliente_nasc")).format('DD/MM/YYYY')
      }
    },
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};