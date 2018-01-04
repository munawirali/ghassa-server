'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('general_ledger_details', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      noTrans: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      accountCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      groupCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debet: {
        defaultValue: 0,
        type: Sequelize.DOUBLE,
      },
      kredit: {
        defaultValue: 0,
        type: Sequelize.DOUBLE,
      },
      uname: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('general_ledger_details');
  }
};
