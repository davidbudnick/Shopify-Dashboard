import { GET_USER } from './types';
import axios from 'axios';

export const getUser = (userid) => (dispatch) => {
  axios.get(`http://localhost:4000/user/${userid}`).then((user) => {
    dispatch({
      type: GET_USER,
      payload: user.data,
    });
  });
};
