import { GET_PROJECT, CREATE_PROJECT, GET_PROJECTS, UPDATE_PROJECT, DELETE_PROJECT } from './types';
require('dotenv').config();

export const getProjects = (userId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}projects/all/${userId}`)
    .then((res) => res.json())
    .then((projects) =>
      dispatch({
        type: GET_PROJECTS,
        payload: projects,
      }),
    );
};

export const getProject = (projectId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}projects/project/${projectId}`)
    .then((res) => res.json())
    .then((project) =>
      dispatch({
        type: GET_PROJECT,
        payload: project,
      }),
    );
};

export const createProject = (userId, projectData) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}projects/new/${userId}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(projectData),
  })
    .then((res) => res.json())
    .then((project) =>
      dispatch({
        type: CREATE_PROJECT,
        payload: project,
      }),
    );
};

export const updateProject = (projectId, projectData) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}projects/update/${projectId}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(projectData),
  })
    .then((res) => res.json())
    .then((project) =>
      dispatch({
        type: UPDATE_PROJECT,
        payload: project,
      }),
    );
};

export const deleteProject = (projectId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}projects/delete/${projectId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((project) =>
      dispatch({
        type: DELETE_PROJECT,
        payload: project,
      }),
    );
};
