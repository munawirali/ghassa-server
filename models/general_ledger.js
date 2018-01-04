'use strict';
module.exports = (sequelize, DataTypes) => {
  var general_ledger = sequelize.define('general_ledger', {
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
    dateTrans: DataTypes.DATEONLY,
    description: DataTypes.STRING,
    type: DataTypes.SMALLINT,
    debet: {
      defaultValue: 0,
      type: DataTypes.DOUBLE,
    },
    kredit: {
      defaultValue: 0,
      type: DataTypes.DOUBLE,
    },
    lock: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
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
  return general_ledger;
};
