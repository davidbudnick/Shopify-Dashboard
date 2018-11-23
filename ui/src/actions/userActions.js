import { GET_USER, CREATE_PROJECT } from './types';
export const getUser = (userid) => (dispatch) => {
  fetch(`http://localhost:4000/user/${userid}`)
    .then((res) => res.json())
    .then((project) =>
      dispatch({
        type: GET_USER,
        payload: project,
      }),
    );
};

export const createProject = (userId, projectData) => (dispatch) => {
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
