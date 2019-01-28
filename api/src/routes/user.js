const express = require('express');
const router = express.Router();
const user = require('../user');
// const pino = require('pino');
// const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Used to create a user in the db
router.post('/', async (req, res) => {
  //Save user data in db
  let userData = await user.addUser(req.body.profile);

  //Sends the user object that was created in the db
  res.send(userData);
});

//Finds all users in the db
//TODO: Remove this for production
router.get('/all', async (res) => {
  let userData = await user.findAllUsers();

  //Sends all user in broswer
  res.send(userData);
});

//Returns one use by its userid
router.get('/:id', async (req, res) => {
  let userData = await user.getUser(req.params.id);
  res.send(userData);
});

module.exports = router;
