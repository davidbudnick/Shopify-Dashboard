// getUser.js
import fetch from 'node-fetch';

export const getMovie = async () => {
  const response = await fetch('http://localhost:4000/user/google-oauth2%7C115591737006318112594', { method: 'GET' });
  const user = await response.json();
  return user;
};
