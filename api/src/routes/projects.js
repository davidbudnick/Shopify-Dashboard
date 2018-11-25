const express = require('express');
const router = express.Router();
const projects = require('../projects');

//Creates a project in the user project json object
router.post('/newProject/:userId', async (req, res, next) => {
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

//Send project Id and get the project back from the db
router.get('/project/:projectId', async (req, res, next) => {
  //Gets single project by userId and projectId
  let projectData = await projects.getProject(req.params.projectId);
  //Sends all project data back to the user
  res.send(projectData);
});

//Send user Id and get all project that are that user project from the db
router.get('/projects/:userId', async (req, res, next) => {
  //Gets all projects by userId
  let projectData = await projects.getProjects(req.parms.userId);
  //Sends all project data back to the user
  res.send(projectData);
});

module.exports = router;
