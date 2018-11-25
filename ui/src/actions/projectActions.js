import { GET_PROJECT, CREATE_PROJECT, GET_PROJECTS } from './types';

export const getProjects = (userId) => (dispatch) => {
  fetch(`http://localhost:4000/projects/projects/${userId}`)
    .then((res) => res.json())
    .then((projects) =>
      dispatch({
        type: GET_PROJECTS,
        payload: projects,
      }),
    );
};

export const getProject = (projectId) => (dispatch) => {
  fetch(`http://localhost:4000/projects/project/${projectId}`)
    .then((res) => res.json())
    .then((project) =>
      dispatch({
        type: GET_PROJECT,
        payload: project,
      }),
    );
};

export const createProject = (userId, projectData) => (dispatch) => {
  fetch(`http://localhost:4000/projects/newProject/${userId}`, {
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
