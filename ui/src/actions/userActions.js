import { GET_USER } from './types';
// import auth0Client from '../Auth';

export const getUser = () => (dispatch) => {
  fetch(`http://localhost:4000/user/${sessionStorage.getItem('userid')}`)
    .then((res) => res.json())
    .then((user) =>
      dispatch({
        type: GET_USER,
        payload: user,
      }),
    );
};
