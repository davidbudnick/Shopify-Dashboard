import { GET_PROJECT } from '../actions/types';

const initailState = {
  project: [],
};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
}
