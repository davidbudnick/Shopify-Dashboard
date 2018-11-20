import { GET_PRODUCTS } from './types';

export const getProducts = () => (dispatch) => {
  fetch('http://localhost:4000/products')
    .then((res) => res.json())
    .then((products) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      }),
    );
};
