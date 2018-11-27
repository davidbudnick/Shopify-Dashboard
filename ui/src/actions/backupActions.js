import { CREATE_BACKUP, GET_BACKUPS, GET_BACKUP } from './types';

export const getBackups = (projectId) => (dispatch) => {
  fetch(`http://localhost:4000/backups/${projectId}`)
    .then((res) => res.json())
    .then((backups) => {
      dispatch({
        type: GET_BACKUPS,
        payload: backups,
      });
    });
};

export const createBackup = (projectId) => (dispatch) => {
  fetch(`http://localhost:4000/backups/start/${projectId}`)
    .then((res) => res.json())
    .then((backups) => {
      dispatch({
        type: CREATE_BACKUP,
        payload: backups,
      });
    });
};

export const getBackup = (backupId) => (dispatch) => {
  fetch(`https://localhost:4000/backups/backup/${backupId}`)
    .then((res) => res.json())
    .then((backup) => {
      dispatch({
        type: GET_BACKUP,
        payload: backup,
      });
    });
};
