'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Telefones', [
      {
        telefone_tipo: 1,
        ddd: "11",
        numero: "4736-2323",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 1,
        ddd: "13",
        numero: "4747-1745",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 1,
        ddd: "14",
        numero: "4735-0108",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 2,
        ddd: "11",
        numero: "94589-7302",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 2,
        ddd: "13",
        numero: "94098-4546",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 2,
        ddd: "14",
        numero: "94565-8898",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Telefones', null, {}); 
  }
};
