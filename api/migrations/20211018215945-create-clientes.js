'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cliente_nasc: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      is_active: {
        allowNull: false,
        defaultValue:true,
        type: Sequelize.BOOLEAN
      },
      endereco_resid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      endereco_comer: {
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      celular: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  }
};