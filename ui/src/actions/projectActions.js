import { GET_PROJECT } from './types';

export const getProject = (userId, projectId) => (dispatch) => {
  fetch(`http://localhost:4000/user/project/${userId}/${projectId}`)
    .then((res) => res.json())
    .then((project) =>
      dispatch({
        type: GET_PROJECT,
        payload: project,
      }),
    );
};
