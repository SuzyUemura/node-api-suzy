'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('EnderecosTipos', [
      {
        Tipo: "residencial",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        Tipo: "comercial",
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EnderecosTipos', null, {});
     
  }
};
