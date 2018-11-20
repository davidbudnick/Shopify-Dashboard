const express = require('express');
const router = express.Router();
const products = require('../products');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Get all products
router.get('/', async (req, res, next) => {
  productData = await products.getProducts();
  res.send(productData);
});

//Get one product
router.get('/:id', async (req, res) => {
  productData = await products.getProduct(req.params.id);
  res.send(productData);
});

//Delete all products
router.get('/deleteAll', async (req, res, next) => {
  productData = await products.deleteAllProducts();
  res.send('All products deleted');
});

//Delete one product
router.get('/delete/:id', async (req, res, next) => {
  productData = await products.deleteProduct(req.params.id);
  res.send(`${req.params.id} deleted`);
});

//add a product
router.post('/add', async (req, res, next) => {
  let title = req.body.title;
  let vendor = req.body.vendor;
  let product_type = req.body.product_type;
  let image_url = req.body.image_url;
  let productData = await products.addProduct(title, vendor, product_type, image_url);
  res.send(productData);
});

module.exports = router;
