import { GET_USER } from './types';

export const getUser = (userid) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ADDRESS}/user/${userid}`)
    .then((res) => res.json())
    .then((user) =>
      dispatch({
        type: GET_USER,
        payload: user,
      }),
    );
};
