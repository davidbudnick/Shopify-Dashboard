const express = require('express');
const router = express.Router();
const user = require('../user');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Used to create a user in the db
router.post('/', async (req, res) => {
  //Save user data in db
  let userData = await user.addUser(req.body.profile).catch((err) => {
    logger.error('User information could not be recived when adding user', err);
  });
  //Sends the user object that was created in the db
  res.send(userData);
});

//Returns one use by its userid
router.get('/:id', async (req, res) => {
  let userData = await user.getUser(req.params.id).catch((err) => {
    logger.error('User information could not be recived when getting a single user', err);
  });

  //Sends one user
  res.send(userData);
});

//Used to show all users in the db
router.get('/users/all', async (req, res) => {
  let userData = await user.getUsers().catch((err) => {
    logger.error('User information could not be recived when getting all users', err);
  });
  //sends all users
  res.send(userData);
});

module.exports = router;
