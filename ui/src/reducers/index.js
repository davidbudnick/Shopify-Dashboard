import { combineReducers } from 'redux';
import postReducer from './postReducer';
import shopifyReducer from './shopifyReducer';

export default combineReducers({
  posts: postReducer,
  shopify: shopifyReducer,
});
