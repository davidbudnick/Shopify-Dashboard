const express = require('express');
const router = express.Router();
const backups = require('../backups');
const fs = require('fs');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Gets all the backups in the db
router.get('/:projectId', async (req, res, next) => {
  let backupData = await backups.getBackups(req.params.projectId);
  res.send(backupData);
});

//Starts a backup in the database
router.get('/start/:projectId', async (req, res, next) => {
  let backupData = await backups.start(req.params.projectId);
  res.send(backupData);
});

//Returns one backup by backupId from database
router.get('/backup/:backupId', async (req, res, next) => {
  let backupData = await backups.backup(req.params.backupId);
  res.send(backupData);
});

//sends the backup as a file to the user
router.get('/download/:backupId', async (req, res, next) => {
  //Query the database for the backup file
  let backupData = await backups.download(req.params.backupId);

  fs.writeFileSync(`temp/${req.params.backupId}.json`, JSON.stringify(backupData), (err) => {
    if (err) throw err;
  });

  res.download(`./temp/${req.params.backupId}.json`);
});
module.exports = router;
