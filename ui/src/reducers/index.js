import { combineReducers } from 'redux';
import postReducer from './postReducer';
import shopifyReducer from './shopifyReducer';
import userReducer from './userReducer';
import projectReducer from './projectReducer';
import backupReducer from './backupReducer';

export default combineReducers({
  posts: postReducer,
  shopify: shopifyReducer,
  user: userReducer,
  projects: projectReducer,
  backups: backupReducer,
});
