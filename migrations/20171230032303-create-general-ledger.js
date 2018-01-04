'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('general_ledgers', {
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
      dateTrans: {
        type: Sequelize.DATEONLY
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
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
      lock: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('general_ledgers');
  }
};
