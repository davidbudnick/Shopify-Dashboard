require('dotenv').config();
const axios = require('axios');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });
//Shopify NodeAPI
// const shopify = require('shopify-api-node');

//Shpoify Config
const shopURL = process.env.SHOPIFY_DOMAIN;

//Get all products
async function getProducts() {
  let url = `${shopURL}products.json`;
  logger.info(url);

  let response = await axios({
    method: 'get',
    url,
    auth: {
      username: process.env.SHOPIFY_API_KEY,
      password: process.env.SHOPIFY_PASSWORD,
    },
  }).catch((error) => {
    logger.error(error);
  });
  return response.data.products;
}

//Get product
async function getProduct(productId) {
  let url = `${shopURL}products/${productId}.json`;

  let response = await axios({
    method: 'get',
    url,
    auth: {
      username: process.env.SHOPIFY_API_KEY,
      password: process.env.SHOPIFY_PASSWORD,
    },
  }).catch((error) => {
    logger.error(error);
  });
  return response.data.product;
}

//Add product
async function addProduct(title, vendor, product_type, image_url) {
  let data = {
    product: {
      title: title,
      vendor: vendor,
      product_type: product_type,
      images: [
        {
          src: image_url,
        },
      ],
    },
  };

  let url = `${shopURL}products.json`;
  let response = await axios({
    method: 'post',
    data,
    url,
    auth: {
      username: process.env.SHOPIFY_API_KEY,
      password: process.env.SHOPIFY_PASSWORD,
    },
  }).catch((error) => {
    logger.error(error);
  });

  logger.info(JSON.stringify(response.data));
}

//Delete one product
async function deleteProduct(id) {
  let url = `${shopURL}/products/${id}.json`;
  let response = await axios({
    method: 'delete',
    url,
    auth: {
      username: process.env.SHOPIFY_API_KEY,
      password: process.env.SHOPIFY_PASSWORD,
    },
  }).catch((error) => {
    logger.error(error);
  });
  return 'Product Deleted';
}

//Delete all products
async function deleteAllProducts() {
  let url = `${shopURL}products.json`;
  logger.info(url);

  let response = await axios({
    method: 'get',
    url,
    auth: {
      username: process.env.SHOPIFY_USERNAME,
      password: process.env.SHOPIFY_PASSWORD,
    },
  }).catch((error) => {
    logger.error(error);
  });

  for (let index = 0; index < response.data.products.length; index++) {
    let productId = response.data.products[index].id;
    deleteProduct(productId);
  }
}

module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.deleteAllProducts = deleteAllProducts;
