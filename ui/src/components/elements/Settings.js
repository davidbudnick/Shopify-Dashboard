/* eslint-disable*/

import React, { Component } from 'react';
import SideBar from '../elements/SideBar';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectActions';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Settings extends Component {
  componentWillMount() {
    this.props.getProject(this.props.match.params.projectId);
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-narrow">
          <SideBar projectId={this.props.match.params.projectId} history={this.props.match} />
        </div>
        <div className="column is-two-fifths">
          <form className="ml mr mt" onSubmit={this.onSubmit}>
            <div className="titleText mr is-size-1">Edit Store</div>
            <div>
              <label className="label is-size-4">Shopify Store Name: </label>
              <input className="input" name="name" type="text" disabled value={this.props.project.name} />
            </div>
            <br />
            <div>
              <label className="label is-size-4">Shopify Domain: </label>
              <input className="input" name="domain" type="text" disabled value={this.props.project.domain} />
            </div>
            <br />
            <div>
              <label className="label is-size-4">Shopify Api Key: </label>
              <input className="input" name="apiKey" type="text" disabled value={this.props.project.apiKey} />
            </div>
            <br />
            <div>
              <label className="label is-size-4">Shopify Password: </label>
              <input className="input" name="password" type="text" disabled value={this.props.project.password} />
            </div>
            <br />
            <Link
              to={{
                pathname: `/project/${this.props.match.params.projectId}/settings/edit/`,
                query: {
                  name: this.props.project.name,
                  domain: this.props.project.domain,
                  apiKey: this.props.project.apiKey,
                  password: this.props.project.password,
                },
              }}
            >
              <button className="button is-info">Edit Settings</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
Settings.propTypes = { getProject: propTypes.func.isRequired };
const mapStateToProps = (state) => ({ project: state.projects.project });

export default connect(
  mapStateToProps,
  { getProject },
)(Settings);
