'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TelefonesTipos', [
      {
        Tipo: "telefone",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        Tipo: "celular",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TelefonesTipos', null, {})
  }
};
