import { combineReducers } from 'redux';
import shopifyReducer from './shopifyReducer';
import userReducer from './userReducer';
import projectReducer from './projectReducer';
import backupReducer from './backupReducer';

export default combineReducers({
  shopify: shopifyReducer,
  user: userReducer,
  projects: projectReducer,
  backups: backupReducer,
});
