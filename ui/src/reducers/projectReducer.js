import { GET_PROJECT, GET_PROJECTS, CREATE_PROJECT } from '../actions/types';

const initailState = {
  project: [],
  projects: [],
};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
}
