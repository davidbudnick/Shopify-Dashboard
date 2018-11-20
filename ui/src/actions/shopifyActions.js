import axios from 'axios';
import { GET_PRODUCTS } from './types';

export const getProducts = () => (dispatch) => {
  let url = `${process.env.REACT_APP_SHOPIFY_DOMAIN}products.json`;
  console.log(url);

  axios({
    method: 'get',
    url,
    auth: {
      username: process.env.REACT_APP_SHOPIFY_USERNAME,
      password: process.env.REACT_APP_SHOPIFY_PASSWORD,
    },
  }).then((products) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  });
};
