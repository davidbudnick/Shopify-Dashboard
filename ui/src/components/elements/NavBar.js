/* eslint-disable */
import React, { Component } from 'react';
import auth0Client from '../../Auth';
import { Link, withRouter } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    const goHome = () => {
      this.props.history.replace('/profile/' + auth0Client.getProfile().sub);
    };

    const signOut = () => {
      auth0Client.signOut();
      this.props.history.replace('/');
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
          {auth0Client.isAuthenticated() && (
            <div className="navbar-start">
              <a
                className="navbar-item"
                onClick={() => {
                  goHome();
                }}
              >
                Shopify Dashbaord
              </a>
            </div>
          )}
          {!auth0Client.isAuthenticated() && (
            <div className="navbar-start">
              <a className="navbar-item">Shopify Dashbaord</a>
            </div>
          )}
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
