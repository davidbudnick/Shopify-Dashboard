/* eslint-disable*/ import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import propTypes from 'prop-types';
import axios from 'axios';

class Projects extends Component {
  componentWillMount() {
    console.log(this.props.location.pathname.substring(9));
    this.props.getUser(this.props.location.pathname.substring(9));
  }

  render() {
    return (
      <div>
        <p className="control mt">
          <b />
          <b />
          <b />
          <b />
          <a className="">Hey! {this.props.user.fullName}</a>
        </p>
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
