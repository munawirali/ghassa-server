'use strict';
module.exports = (sequelize, DataTypes) => {
  var general_ledger_detail = sequelize.define('general_ledger_detail', {
    // id:{
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: DataTypes.STRING
    // },
    noTrans: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    accountCode: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    groupCode: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    typeCode: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    debet: {
      defaultValue: 0,
      type: DataTypes.DOUBLE,
    },
    kredit: {
      defaultValue: 0,
      type: DataTypes.DOUBLE,
    },
    uname: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return general_ledger_detail;
};
