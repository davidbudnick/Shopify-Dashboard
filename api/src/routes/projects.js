const express = require('express');
const router = express.Router();
const projects = require('../projects');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//returns all the projects from the db
router.get('/all/:userId', async (req, res) => {
  let projectData = await projects.getProjects(req.params.userId).catch((err) => {
    logger.error('Project information could not be recived from projects.js at getting all user projects', err);
  });
  res.send(projectData);
});

//Creates a project in the user project json object
router.post('/new/:userId', async (req, res) => {
  //This should recieve a json object with the new project
  let projectData = await projects
    .createProject(req.body.apiKey, req.body.password, req.body.domain, req.body.name, req.params.userId)
    .catch((err) => {
      logger.error('Project information could not be recived from projects.js at creating a new project', err);
    });
  //Sends back the project data to the user
  res.send(projectData);
});

//Updates project information in db
router.post('/update/:projectId', async (req, res) => {
  let projectData = await projects
    .updateProject(req.params.projectId, req.body.apiKey, req.body.password, req.body.domain, req.body.name)
    .catch((err) => {
      logger.error('Project information could not be recived when at updating a user project', err);
    });

  res.send(projectData);
});

//Send project Id and get the project back from the db
router.get('/project/:projectId', async (req, res) => {
  //Gets single project by userId and projectId
  let projectData = await projects.getProject(req.params.projectId).catch((err) => {
    logger.error('Project information could not be recived when getting a user projects by project id', err);
  });
  //Sends all project data back to the user
  res.send(projectData);
});

//Send user Id and get all project that are that user project from the db
router.get('/projects/:userId', async (req, res) => {
  //Waits for the req params to load
  let userId = await req.params.userId;
  //Gets all projects by userId
  let projectData = await projects.getProjects(userId).catch((err) => {
    logger.error('Project information could not be recived when getting a users projects by userId', err);
  });
  // //Sends all project data back to the user
  res.send(projectData);
});

//Deletes the project in the database
router.delete('/projects/delete/:projectid', async (req, res) => {
  let projectData = await projects.deleteproject(req.params.projectId).catch((err) => {
    logger.error('Project information could not be recived when deleting a user project', err);
  });
  res.send(projectData);
});

module.exports = router;
