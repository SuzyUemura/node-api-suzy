'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clientes', [
    {
      cliente_nome: "Anderson Moreira",
      cliente_nasc: "1990-04-29",
      is_active: true,
      endereco_resid: 1,
      endereco_comer: 4,
      telefone: 1,
      celular: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cliente_nome: "Maria da Silva",
      cliente_nasc: "1986-12-21",
      is_active: false,
      endereco_resid: 2,
      endereco_comer: 5,
      telefone: 2,
      celular: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cliente_nome: "Consoloação Almeida",
      cliente_nasc: "2000-06-12",
      is_active: true,
      endereco_resid: 3,
      endereco_comer: 6,
      telefone: 3,
      celular: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Clientes', null, {});
  
  }
};
