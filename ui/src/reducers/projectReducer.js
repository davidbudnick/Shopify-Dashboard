import { CREATE_PROJECT } from '../actions/types';

const initailState = {
  product: [],
  projects: [],
};

export default function(state = initailState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}
