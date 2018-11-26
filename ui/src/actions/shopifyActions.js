import { GET_PRODUCTS } from './types';

export const getProducts = (projectId) => (dispatch) => {
  fetch(`http://localhost:4000/products/${projectId}`)
    .then((res) => res.json())
    .then((products) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      }),
    );
};
