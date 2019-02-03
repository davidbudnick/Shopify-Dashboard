require('dotenv').config();
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });
const db = require('../db');
const uniqid = require('uniqid');

//Creates a project by userId
async function createProject(apiKey, password, domain, name, userId) {
  let projectId = uniqid('project-');
  let projectData = await db.Project.create({
    projectId: projectId,
    userId: userId,
    name: name,
    apiKey: apiKey,
    password: password,
    domain: domain,
  }).catch((err) => {
    logger.error('There was an error creating this project', err);
  });

  logger.debug(JSON.stringify(projectData));

  //find all projects to send back
  let projectsData = await db.Project.findAll({
    where: {
      userId: userId,
    },
  }).catch((err) => {
    logger.error('The projects could not be found in the db', err);
  });

  //Returns all projects in the db
  return projectsData;
}

//Gets a single project by projectId from the db by projectId
async function getProject(projectId) {
  //Finds one user in the db
  let projectData = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error('There was an error finding the project', err);
  });

  //Returns on project from db
  return projectData;
}

//Gets all project that user has under there userid
async function getProjects(userId) {
  //Finds all in the db
  let projectData = await db.Project.findAll({
    where: {
      userId: userId,
    },
  }).catch((err) => {
    logger.error('There was an error finding the projects', err);
  });

  //Returns all project data
  return projectData;
}

//Update project settings in the db
async function updateProject(projectId, apiKey, password, domain, name) {
  //Updates project in the database by projectId
  await db.Project.update(
    {
      apiKey: apiKey,
      password: password,
      domain: domain,
      name: name,
    },
    {
      where: {
        projectId: projectId,
      },
    },
  ).catch((err) => {
    logger.error('There was an error updating the project', err);
  });

  //Finds the project Id in the database
  let projectData = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error('There was an error looking up the project', err);
  });

  //Returns updated project data
  return projectData;
}

//Delete the project by the projectId
async function deleteproject(projectId) {
  let projectData = await db.Project.delete({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error('There was an error deleting the project', err);
  });

  return projectData;
}

module.exports.createProject = createProject;
module.exports.getProject = getProject;
module.exports.getProjects = getProjects;
module.exports.updateProject = updateProject;
module.exports.deleteproject = deleteproject;
