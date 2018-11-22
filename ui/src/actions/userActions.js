import { GET_USER } from './types';
import axios from 'axios';

export const getUser = () => (dispatch) => {
  let userid = sessionStorage.getItem('userid');
  axios.get(`http://localhost:4000/user/${userid}`).then((user) => {
    dispatch({
      type: GET_USER,
      payload: user.data,
    });
  });
};
