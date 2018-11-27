const express = require('express');
const router = express.Router();
const backups = require('../backups');
// const pino = require('pino');
// const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Gets all the backups in the db
router.get('/:userId', async (req, res, next) => {
  let backupData = await backups.getBackups(req.params.userId);
  res.send(backupData);
});

//Starts a backup in the database
router.get('/start/:projectId', async (req, res, next) => {
  let backupData = await backups.start(req.params.projectId);
  res.send(backupData);
});
