import { CREATE_BACKUP, GET_BACKUPS, GET_BACKUP } from './types';
require('dotenv').config();

export const getBackups = (projectId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}/backups/${projectId}`)
    .then((res) => res.json())
    .then((backups) => {
      dispatch({
        type: GET_BACKUPS,
        payload: backups,
      });
    });
};

export const createBackup = (projectId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}/backups/start/${projectId}`)
    .then((res) => res.json())
    .then((backups) => {
      dispatch({
        type: CREATE_BACKUP,
        payload: backups,
      });
    });
};

export const getBackup = (backupId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}/backups/backup/${backupId}`)
    .then((res) => res.json())
    .then((backup) => {
      dispatch({
        type: GET_BACKUP,
        payload: backup,
      });
    });
};
