'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addConstraint('Telefones', {
     type: 'foreign key',
     fields: ['telefone_tipo'],
     name:'telefone_tipo',
     references: {
       table: 'TelefonesTipos',
       field: 'id'
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint('Telefones', 'telefone_tipo')
  }
};
