import { GET_PRODUCTS } from './types';
require('dotenv').config();

export const getProducts = (projectId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}/projects/${projectId}`)
    .then((res) => res.json())
    .then((products) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      }),
    );
};
