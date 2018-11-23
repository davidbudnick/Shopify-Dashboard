import { GET_USER, CREATE_PROJECT } from '../actions/types';

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
    case CREATE_PROJECT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
