import { GET_USER } from './types';

export const getUser = (userid) => (dispatch) => {
  fetch(`http://localhost:4000/user/${userid}`)
    .then((res) => res.json())
    .then((user) =>
      dispatch({
        type: GET_USER,
        payload: user,
      }),
    );
};
