'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectId: DataTypes.STRING,
    userId: DataTypes.STRING,
    name: DataTypes.STRING,
    apiKey: DataTypes.STRING,
    password: DataTypes.STRING,
    domain: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};