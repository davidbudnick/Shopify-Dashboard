// import { GET_PROJECT, GET_PROJECTS, CREATE_PROJECT } from './types';
import { CREATE_PROJECT } from './types';

// export const getProject = (userId, projectId) => (dispatch) => {
//   fetch(`http://localhost:4000/user/project/${userId}/${projectId}`)
//     .then((res) => res.json())
//     .then((project) =>
//       dispatch({
//         type: GET_PROJECT,
//         payload: project,
//       }),
//     );
// };

// export const getProjects = (userId) => (dispatch) => {
//   fetch(`http://localhost:4000/user/projects/${userId}`)
//     .then((res) => res.json())
//     .then((projects) =>
//       dispatch({
//         type: GET_PROJECTS,
//         payload: projects,
//       }),
//     );
// };

export const createProject = (projectData, userId) => (dispatch) => {
  fetch(`http://localhost:4000/user/newProject/${userId}`, {
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
