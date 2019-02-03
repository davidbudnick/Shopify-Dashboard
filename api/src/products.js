require('dotenv').config();
const axios = require('axios');
const pino = require('pino');
const logger = pino({ prettyPrint: { colorize: true }, level: process.env.LOG_LEVEL || 'info', name: 'index' });
const db = require('../db');

//Get all products from shopify
async function getProducts(projectId) {
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

  //Return all the products
  return response.data.products;
}

//Get product
async function getProduct(projectId, productId) {
  //Query DB from apiKey, Store Domain, and Password
  let projectInfo = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error(`There was an error looking up the project ID -> ${projectId}`, err);
  });

  //Create url to find one product in shopify
  let url = `${projectInfo.domain}admin/products/${productId}.json`;

  //Query all the products in shopify
  let response = await axios({
    method: 'get',
    url,
    auth: {
      username: projectInfo.apiKey,
      password: projectInfo.password,
    },
  }).catch((err) => {
    logger.error('There was an error finding the product in shopify', err);
  });

  //Return one product
  return response.data.product;
}

//Add product
async function addProduct(projectId, title, vendor, product_type, image_url) {
  //Query DB from apiKey, Store Domain, and Password
  let projectInfo = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error(`There was an error looking up the project ID -> ${projectId}`, err);
  });

  //Create the JSON object for shopify
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

  //Creates the url for adding a product in shopify
  let url = `${projectInfo.shopURL}admin/products.json`;
  let response = await axios({
    method: 'post',
    data,
    url,
    auth: {
      username: projectInfo.apiKey,
      password: projectInfo.password,
    },
  }).catch((err) => {
    logger.error('There was an error creating the project in shopify', err);
  });

  //sends back the updated product in shopify
  // logger.debug(JSON.stringify(response.data));
}

//Delete one product
async function deleteProduct(projectId, productId) {
  //Query DB from apiKey, Store Domain, and Password
  let projectInfo = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error(`There was an error looking up the project ID -> ${projectId}`, err);
  });

  //Creates url for delete product in shopify
  let url = `${projectInfo.shopURL}admin/products/${productId}.json`;

  //Deletes product in shopify
  let response = await axios({
    method: 'delete',
    url,
    auth: {
      username: projectInfo.apiKey,
      password: projectInfo.password,
    },
  }).catch((err) => {
    logger.error('There was an error deleting the product in shopify', err);
  });

  //Returns that project has been deleted
  return `The product has been deleted from shopify`, response;
}

//Delete all products - DANGER DANGER :)
async function deleteAllProducts(projectId) {
  let projectInfo = await db.Project.findOne({
    where: {
      projectId: projectId,
    },
  }).catch((err) => {
    logger.error(`There was an error looking up the project ID -> ${projectId}`, err);
  });

  let url = `${projectInfo.shopURL}admin/products.json`;

  let response = await axios({
    method: 'get',
    url,
    auth: {
      username: projectInfo.apiKey,
      password: projectInfo.password,
    },
  }).catch((err) => {
    logger.error(
      'There was an error finding all the product in shpoify. Being used to delete all the product in shopify',
      err,
    );
  });

  for (let index = 0; index < response.data.products.length; index++) {
    let productId = response.data.products[index].id;
    deleteProduct(productId);
  }

  return 'All products have been deleted from shopify', response;
}

module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.deleteAllProducts = deleteAllProducts;
