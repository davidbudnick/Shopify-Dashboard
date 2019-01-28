const express = require('express');
const router = express.Router();
const products = require('../products');
// const pino = require('pino');
// const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });

//Get all products from shopify
router.get('/:projectId', async (req, res) => {
  let productData = await products.getProducts(req.params.projectId);
  res.send(productData);
});

//Get one product from shopify
router.get('/:projectId/:id', async (req, res) => {
  let productData = await products.getProduct(req.params.projectId, req.params.id);
  res.send(productData);
});

//Delete all products from shopify
router.get('/deleteAll/:projectId', async (req, res) => {
  let productData = await products.deleteAllProducts(req.params.projectId);
  res.send(productData);
});

//Delete one product from shopify
router.get('/delete/:projectId/:id', async (req, res) => {
  let productData = await products.deleteProduct(req.params.projectId, req.params.id);
  res.send(productData);
});

//add a product to shopify
router.post('/add/:projectId', async (req, res) => {
  let productData = await products.addProduct(
    req.params.projectId,
    req.body.title,
    req.body.vendor,
    req.body.product_type,
    req.body.image_url,
  );
  res.send(productData);
});

module.exports = router;
