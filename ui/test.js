const axios = require('axios');
require('dotenv').config();

let url = `${process.env.REACT_APP_SHOPIFY_DOMAIN}products.json`;

axios({
  method: 'get',
  url,
  auth: {
    username: process.env.REACT_APP_SHOPIFY_USERNAME,
    password: process.env.REACT_APP_SHOPIFY_PASSWORD,
  },
}).then((products) => {
  console.log(products.data);
});
