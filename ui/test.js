const axios = require('axios');
require('dotenv').config();

let id = 'google-oauth2|115591737006318112594';

axios.get(`http://localhost:4000/user/${id}`).then(function(response) {
  console.log(response.data);
});
