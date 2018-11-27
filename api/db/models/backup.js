'use strict';
module.exports = (sequelize, DataTypes) => {
  const Backup = sequelize.define(
    'Backup',
    {
      name: DataTypes.STRING,
      userId: DataTypes.STRING,
      products: DataTypes.JSON(DataTypes.STRING),
    },
    {},
  );
  Backup.associate = function(models) {
    // associations can be defined here
  };
  return Backup;
};
