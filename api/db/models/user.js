'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      fullName: DataTypes.STRING,
      nickName: DataTypes.STRING,
      picture: DataTypes.STRING,
      projects: DataTypes.JSON(DataTypes.STRING),
    },
    {},
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
