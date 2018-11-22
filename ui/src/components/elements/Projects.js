/* eslint-disable*/ import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Projects extends Component {
  componentWillMount() {
    this.props.getUser(this.props.location.pathname.substring(9));
  }
  render() {
    return (
      <div className="container mt">
        <div className="columns is-multiline">
          <div className="column is-narrow">
            <Link to="/newProject">
              <div className="box has-text-centered addBox ml mt">
                <i className="fas fa-plus is-size-3 newProject" />
                <p className="mb is-size-5 has-text-weight-bold	">Add your shopify store</p>
              </div>
            </Link>
          </div>
          <div className="column is-narrow">
            <Link to={{ pathname: this.props.user.userId + '/project/' + '1' }}>
              <div className="box has-text-centered addBox ml mt">
                <div className="projectTitle text is-size-3">Test Store</div>
              </div>
            </Link>
          </div>
        </div>
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
