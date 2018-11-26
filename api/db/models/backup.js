'use strict';
module.exports = (sequelize, DataTypes) => {
  const Backup = sequelize.define('Backup', {
    name: DataTypes.STRING,
    products: DataTypes.JSON
  }, {});
  Backup.associate = function(models) {
    // associations can be defined here
  };
  return Backup;
};