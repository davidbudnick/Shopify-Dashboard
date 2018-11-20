/* eslint-disable */
import React, { Component } from 'react';
import auth0Client from '../../Auth';
import { Link, withRouter } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    const signOut = () => {
      auth0Client.signOut();
      props.history.replace('/');
    };

    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">
          Shopify Dashbaord
        </Link>
        {!auth0Client.isAuthenticated() && (
          <button className="btn btn-dark" onClick={auth0Client.signIn}>
            Sign In
          </button>
        )}
        {auth0Client.isAuthenticated() && (
          <div>
            <label className="mr-2 text-white mt mr">{auth0Client.getProfile().name}</label>
            <button
              className="btn btn-dark"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>
    );
  }
}

export default withRouter(NavBar);
