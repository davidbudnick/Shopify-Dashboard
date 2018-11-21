/* eslint-disable*/ import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import propTypes from 'prop-types';
import auth0Client from '../../Auth';

class Projects extends Component {
  componentWillMount() {
    console.log(auth0Client.getUser());
  }
  render() {
    return (
      <div>
        {auth0Client.isAuthenticated() && (
          <p className="control mt">
            <a className="has-text-white">
              <label className="mr" />
            </a>
          </p>
        )}
      </div>
    );
  }
}
Projects.propTypes = { getUser: propTypes.func.isRequired };
const mapStateToProps = (state) => ({ user: state.user.user });

export default connect(
  mapStateToProps,
  { getUser },
)(Projects);
