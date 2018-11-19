import React, { Component } from 'react';
import { Auth0LockPasswordless } from 'auth0-lock';
import auth0Client from '../Auth';
require('dotenv').config();

class Auth0 extends Component {
  async componentDidMount() {
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    let domain = process.env.REACT_APP_AUTH0_DOMAIN;

    console.log(domain);

    let lock = new Auth0LockPasswordless(clientId, domain, {
      container: 'login',
      auth: {
        redirectUrl: process.env.REACT_APP_AUTH0_REDIRECT_URI,
        responseType: 'token id_token',
      },
    });
    lock.show();
  }

  render() {
    return (
      <span>
        <div>{!auth0Client.isAuthenticated() && <div id="login" className="authLock" />}</div>
        <div>{auth0Client.isAuthenticated() && <div id="login" className="authHide" />}</div>
      </span>
    );
  }
}

export default Auth0;
