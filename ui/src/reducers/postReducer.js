import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initailState = {
  items: [],
  item: {},
};

export default function(state = initailState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
