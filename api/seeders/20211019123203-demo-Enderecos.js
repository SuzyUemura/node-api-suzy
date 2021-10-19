'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Enderecos', [
       {
        endereco_tipo: 1,
        rua: "Rua Onze",
        numero: "34 B",
        complemento: "-",
        bairro: "Praia forte",
        cep: "0980-123",
        cidade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        endereco_tipo: 1,
        rua: "Av das Orquideas",
        numero: "123",
        complemento: "Proximo ao mercado Shibata",
        bairro: "Buzios",
        cep: "08790-456",
        cidade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        endereco_tipo: 1,
        rua: "Rua Onze",
        numero: "3790",
        complemento: "Residencial Helbor",
        bairro: "Canelinhas",
        cep: "07310-000",
        cidade: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        endereco_tipo: 2,
        rua: "Rua Onze",
        numero: "45",
        complemento: "Proximo ao metro",
        bairro: "Araquara",
        cep: "09871-555",
        cidade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        endereco_tipo: 2,
        rua: "Alameda Santo Agostinho",
        numero: "678 C",
        complemento: "Esquina com cinemark",
        bairro: "Azul",
        cep: "08759-322",
        cidade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        endereco_tipo: 2,
        rua: "Rua Terezza",
        numero: "13",
        complemento: "Não tem",
        bairro: "Santos",
        cep: "08750-777",
        cidade: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ])
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Enderecos', null, {});
   
  }
};
