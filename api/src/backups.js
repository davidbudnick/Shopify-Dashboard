require('dotenv').config();
const axios = require('axios');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });
const db = require('../db');
const uniqid = require('uniqid');

//Gets all the backup from the databse
async function getBackups(projectId) {
  //Query DB from apiKey, Store Domain, and Password
  let projectInfo = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error(`There was an error looking up the project ID -> ${projectId}`, err);
  });

  //Query database for all backup for current user
  let backupData = await db.Backup.findAll({
    where: {
      userId: projectInfo.userId,
    },
  });

  //Returns all backups for the current user
  return backupData;
}

//Create a backup of the shopify products in the database
async function start(projectId) {
  //Creates unique name for backup
  let backupId = uniqid('backup-');

  //Query DB from apiKey, Store Domain, and Password
  let projectInfo = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error(`There was an error looking up the project ID -> ${projectId}`, err);
  });

  //Format the domain to query all the projects in shopify
  let url = `${projectInfo.domain}admin/products.json`;

  //Query all the products in shopify
  let response = await axios({
    method: 'get',
    url,
    auth: {
      username: projectInfo.apiKey,
      password: projectInfo.password,
    },
  }).catch((err) => {
    logger.error('There was an error finding the products in shopify', err);
  });

  //Creates the backup in the databse
  let backupData = await db.Backup.create({
    backupId: backupId,
    userId: projectInfo.userId,
    products: response.data.products,
  }).catch((err) => {
    logger.error('The backup could not be created in the database', err);
  });

  //Query the database for all backup and return it
  let allBackupData = await db.Backup.findAll({
    where: {
      userId: projectInfo.userId,
    },
  }).catch((err) => {
    logger.error('No backups could be found in the database', err);
  });

  //Returns all the backups from the database
  return allBackupData;
}

//Finds one backup in the database and sends the backup data
async function backup(backupId) {
  let backupData = await db.Backup.findOne({
    where: {
      backupId: backupId,
    },
  }).catch((err) => {
    logger.error('There was an error finding the backup in the database', err);
  });

  //Returns the backup data
  return backupData;
}

//Finds one backup in the database and sends just product data
async function download(backupId) {
  let backupData = await db.Backup.findOne({
    where: {
      backupId: backupId,
    },
  }).catch((err) => {
    logger.error('There was an error finding the backup in the database', err);
  });

  return backupData.products;
}

module.exports.getBackups = getBackups;
module.exports.start = start;
module.exports.backup = backup;
module.exports.download = download;
