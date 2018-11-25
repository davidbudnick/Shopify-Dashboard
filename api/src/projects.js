require('dotenv').config();
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });
const db = require('../db');
const uniqid = require('uniqid');

//Creates a project by userId
async function createProject(apiKey, password, domain, name, userId) {
  let projectId = uniqid('project-');
  projectData = await db.Project.create({
    projectId: projectId,
    userId: userId,
    name: name,
    apiKey: apiKey,
    password: password,
    domain: domain,
  }).catch((err) => {
    logger.error('There was an error creating this project', err);
  });

  return projectData;
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

  return projectData;
}

//Gets all project that user has under there userid
async function getProjects(userId) {
  //Finds all in the db
  let projectData = await db.User.findAll({
    where: {
      userId: userId,
    },
  }).catch((err) => {
    logger.error('There was an error finding the projects', err);
  });

  //Returns all project data
  return projectData;
}

module.exports.createProject = createProject;
module.exports.getProject = getProject;
module.exports.getProjects = getProjects;
