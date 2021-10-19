'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Clientes', {
      type: 'foreign key',
      fields: ['endereco_resid'],
      name:'endereco_resid',
      references: {
        table: 'Enderecos',
        field: 'id'
      }
    }, 
    {
      type: 'foreign key',
      fields: ['endereco_comer'],
      name:'endereco_comer',
      references: {
        table: 'Enderecos',
        field: 'id'
      }
    },
    {
      type: 'foreign key',
      fields: ['telefone'],
      name:'telefone',
      references: {
        table: 'Telefones',
        field: 'id'
      }
    },
    {
      type: 'foreign key',
      fields: ['celular'],
      name:'celular',
      references: {
        table: 'Telefones',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Clientes', 'endereco_resid')
    await queryInterface.removeConstraint('Clientes', 'endereco_comer')
    await queryInterface.removeConstraint('Clientes', 'telefone')
    await queryInterface.removeConstraint('Clientes', 'celular')
  }
};
