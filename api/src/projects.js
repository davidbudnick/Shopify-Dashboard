const express = require('express');
const router = express.Router();
const projects = require('../projects');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Creates a project in the user project json object
router.post('/newProject/:userId', async (req, res, next) => {
  //This should recieve a json object with the new project
  let projectData = await user.createProject(
    req.body.apiKey,
    req.body.password,
    req.body.domain,
    req.body.name,
    req.params.userId,
  );
  //Sends back the project data to the user
  res.send(projectData);
});

router.get('/project/:userId/:projectId', async (req, res, next) => {
  logger.error(req);
  //Gets single project by userId and projectId
  let projectData = await user.getProject(req.params.projectId, req.params.userid);
  //Sends all project data back to the user
  res.send(projectData);
});

//This should not be need because I get the user object that has the projects JSON OBJECT
// router.get('/projects/:userId', async (req, res, next) => {
//   //Gets all projects by userId
//   let projectData = await user.getProjects(req.parms.userId);
//   //Sends all project data back to the user
//   res.send(projectData);
// });
