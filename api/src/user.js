require('dotenv').config();
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });
const db = require('../db');
const uniqid = require('uniqid');

async function addUser(profile) {
  //checks if the current user in in the db and finds it
  let userData = await db.User.findOne({
    where: {
      userId: profile.sub,
    },
  }).catch((err) => {
    logger.error('Error finding the user in db', err);
  });

  //If no user is found in the db it creates one
  if (!userData) {
    //Save the Auth0 user information to db
    userData = await db.User.create({
      userId: profile.sub,
      firstName: profile.given_name,
      lastName: profile.family_name,
      fullName: profile.name,
      nickName: profile.nickname,
      picture: profile.picture,
      projects: [],
    }).catch((err) => {
      logger.error('Error creating the user in the db', err);
    });
  }

  logger.info(JSON.stringify(userData));

  //Return db user data
  return userData;
}

//Finds all users in db
//TODO: Remove this for production
async function findAllUsers() {
  let userData = await db.User.findAll().catch((err) => {
    logger.error('Error finding users in db', err);
  });

  //Returns all users from db
  return userData;
}

//Gets current users data from db
async function getUser(userId) {
  //Finds the single user in the db
  let userData = await db.User.findOne({
    where: {
      userId: userId,
    },
  }).catch((err) => {
    logger.error('User could not be found in db', err);
  });

  //Returns all the current user data
  return userData;
}

//Creates a project by userId in the User JSON object
async function createProject(apiKey, password, domain, name, userId) {
  let id = uniqid('project-');

  //Get current user
  let userData = await db.User.findOne({
    where: {
      userId: userId,
    },
  }).catch((err) => {
    logger.error('There was an error finding the user data in the database', err);
  });

  let projects = [];
  // Get projects from user
  if (userData.projects) {
    projects = userData.projects;
  }

  //Get infromation passed in from body
  let project = {
    id: id,
    credentials: {
      apiKey: apiKey,
      password: password,
    },
    domain: domain,
    name: name,
  };

  projects.push(project);

  //Creates the record in the db
  let projectData = await db.User.update({ projects: projects }, { where: { userId: userId } }).catch((err) => {
    logger.error('There was an error updated the projects', err);
  });

  //Returns the project that was created
  let updateProjectData = await db.User.findOne({
    where: {
      userId: userId,
    },
  }).catch((err) => {
    logger.error(err);
  });

  return updateProjectData;
}

//Gets a single project by projectId from the db
async function getProject(projectId, userId) {
  //Finds one user in the db
  let projectData = await db.User.findOne({
    where: {
      userId: userId,
    },
  }).catch((err) => {
    logger.error('There was an error finding the project', err);
  });

  //Picks out the single project from the JSON object
  return projectData.projects[projectId];
}

//Will not be needed
// //Find all the projects the user has
// async function getProjects(userId) {
//   //Finds all in the db
//   let projectData = await db.User.findAll({
//     where: {
//       userId: userId,
//     },
//   }).catch((err) => {
//     logger.error('There was an error finding the projects', err);
//   });

//   //Returns all project data
//   return projectData.projects;
// }

module.exports.addUser = addUser;
module.exports.findAllUsers = findAllUsers;
module.exports.getUser = getUser;
module.exports.createProject = createProject;
module.exports.getProject = getProject;
// module.exports.getProjects = getProjects;
