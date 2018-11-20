import { GET_PRODUCTS } from '../actions/types';

const initailState = {
  products: [],
};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
