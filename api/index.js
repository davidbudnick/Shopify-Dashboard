require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Express Config
const app = express();
const port = process.env.SERVER_PORT;

//Cors Config
app.use((req, res, next) => {
  next();
});
app.use(cors());

//Body Parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routers
const products = require('./src/routes/products');
const user = require('./src/routes/user');
const projects = require('./src/routes/projects');
const backups = require('./src/routes/backups');

//Using Routes
app.use('/products', products);
app.use('/user', user);
app.use('/projects', projects);
app.use('/backups', backups);

//Base route
app.get('/', (req, res) => {
  res.send('Route Active: 🤖');
});

//Logs what port the api server is running on
app.listen(port, () => {
  logger.info(`The server is running on port => ${port}`);
});
