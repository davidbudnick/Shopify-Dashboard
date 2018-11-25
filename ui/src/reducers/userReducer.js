import { GET_USER } from '../actions/types';

const initailState = {
  user: [],
};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
