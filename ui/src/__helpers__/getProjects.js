// getProjects.js
import fetch from 'node-fetch';

export const getMovie = async () => {
  const response = await fetch('http://localhost:4000/projects/all/google-oauth2%7C115591737006318112594', {
    method: 'GET',
  });
  const projects = await response.json();
  return projects;
};
