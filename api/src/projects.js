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

  logger.info(JSON.stringify(projectData));

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

//Gets all projects in db
//TODO: Remove for production
async function getAllProjects() {
  let projectData = await db.Project.findAll().catch((err) => {
    logger.error('All projects could not be found in db', err);
  });

  logger.info(projectData);

  return projectData;
}

//Update project settings in the db
async function updateProject(projectId, apiKey, password, domain) {
  let projectData = await db.Project.update({
    apiKey: apiKey,
    password: password,
    domain: domain,
    where: {
      projectId: projectId,
    },
  });
  return projectData;
}

module.exports.createProject = createProject;
module.exports.getProject = getProject;
module.exports.getProjects = getProjects;
module.exports.getAllProjects = getAllProjects;
module.exports.updateProject = updateProject;
