'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clientes', 'cliente_nasc', {
      type: Sequelize.DATEONLY,
      get() {
        return moment(this.getDataValue("cliente_nasc")).format('DD/MM/YYYY')
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clientes', 'cliente_nasc', Sequelize.DATEONLY)
  }
};
