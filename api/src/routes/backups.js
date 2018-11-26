const express = require('express');
const router = express.Router();
const backups = require('../backups');
// const pino = require('pino');
// const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Gets all the backups in the db
router.get('/:projectId', async (req, res, next) => {
  let productData = await backups.backup(req.params.projectId);
  res.send(productData);
});

//Starts a backup in the database
router.get('/start/:projectId', async (req, res, next) => {
  let productData = await backups.start(req.params.projectId);
  res.send(productData);
});
