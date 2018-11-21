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
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <div className="navbar-burger burger" data-target="navMenuColorprimary-example">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenuColorprimary-example" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Shopify Dashbaord
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                {!auth0Client.isAuthenticated() && (
                  <p className="control">
                    <a className="bd-tw-button button is-info" onClick={auth0Client.signIn}>
                      <span>Sign in</span>
                    </a>
                  </p>
                )}
                {auth0Client.isAuthenticated() && (
                  <p className="control mt">
                    <a className="has-text-white">
                      <label className="mr">{auth0Client.getProfile().name}</label>
                    </a>
                  </p>
                )}
                {auth0Client.isAuthenticated() && (
                  <p className="control">
                    <a
                      className="bd-tw-button button is-info"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <span>Sign out</span>
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
