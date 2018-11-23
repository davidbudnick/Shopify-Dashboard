const express = require('express');
const router = express.Router();
const user = require('../user');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Used to create a user in the db
router.post('/', async (req, res, next) => {
  //Save user data in db
  let userData = await user.addUser(req.body.profile);

  //Sends the user object that was created in the db
  res.send(userData);
});

//Finds all users in the db
//TODO: Remove this for production
router.get('/all', async (req, res, next) => {
  let userData = await user.findAllUsers();

  //Sends all user in broswer
  res.send(userData);
});

//Returns one use by its userid
router.get('/:id', async (req, res, next) => {
  let userData = await user.getUser(req.params.id);
  res.send(userData);
});

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

module.exports = router;
