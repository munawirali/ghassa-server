'use strict';
module.exports = (sequelize, DataTypes) => {
  var config_type_code = sequelize.define('config_type_code', {
    // id:{
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: DataTypes.STRING
    // },
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
    name: {
      allowNull: false,
      type: DataTypes.STRING
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
  return config_type_code;
};
