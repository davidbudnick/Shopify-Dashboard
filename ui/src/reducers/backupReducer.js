import { CREATE_BACKUP, GET_BACKUPS, GET_BACKUP } from '../actions/types';

const initailState = {
  backup: [],
  backups: [],
};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_BACKUPS:
      return {
        ...state,
        backups: action.payload,
      };
    case CREATE_BACKUP:
      return {
        ...state,
        backups: action.payload,
      };
    case GET_BACKUP:
      return {
        ...state,
        backup: action.payload,
      };
    default:
      return state;
  }
}
