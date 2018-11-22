import { combineReducers } from 'redux';
import postReducer from './postReducer';
import shopifyReducer from './shopifyReducer';
import userReducer from './userReducer';

export default combineReducers({
  posts: postReducer,
  shopify: shopifyReducer,
  user: userReducer,
});
