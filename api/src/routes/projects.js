const express = require('express');
const router = express.Router();
const projects = require('../projects');
// const pino = require('pino');
// const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//returns all the projects from the db
router.get('/', async (res) => {
  let projectData = await projects.getAllProjects();
  res.send(projectData);
});

//Creates a project in the user project json object
router.post('/newProject/:userId', async (req, res) => {
  //This should recieve a json object with the new project
  let projectData = await projects.createProject(
    req.body.apiKey,
    req.body.password,
    req.body.domain,
    req.body.name,
    req.params.userId,
  );
  //Sends back the project data to the user
  res.send(projectData);
});

//Updates project information in db
router.post('/updateProject/:projectId'),
  async (req, res) => {
    let projectData = await projects.updateProject(
      req.params.projectId,
      req.body.apiKey,
      req.body.password,
      req.body.password,
    );

    //sends the updated project information back to the user
    res.send(projectData);
  };

//Send project Id and get the project back from the db
router.get('/project/:projectId', async (req, res) => {
  //Gets single project by userId and projectId
  let projectData = await projects.getProject(req.params.projectId);
  //Sends all project data back to the user
  res.send(projectData);
});

//Send user Id and get all project that are that user project from the db
router.get('/projects/:userId', async (req, res) => {
  //Waits for the req params to load
  let userId = await req.params.userId;
  //Gets all projects by userId
  let projectData = await projects.getProjects(userId);
  // //Sends all project data back to the user
  res.send(projectData);
});

module.exports = router;
