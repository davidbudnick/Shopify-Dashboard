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
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.deleteProject = this.deleteProject(this);
    this.onChange = this.onChange.bind(this);
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      projectNameCheck: '',
      projectCheck: true,
    };
  }

  onChange(e) {
    if (e.target.name === 'projectNameCheck' && e.target.value === this.props.project.name) {
      this.setState({ projectCheck: false });
    }
    this.setState({ [e.target.name]: e.target.value });
  }

  modalOpen() {
    this.setState({ active: true });
  }
  modalClose() {
    this.setState({ active: false });
  }
  deleteProject() {}

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
                  userId: this.props.project.userId,
                  name: this.props.project.name,
                  domain: this.props.project.domain,
                  apiKey: this.props.project.apiKey,
                  password: this.props.project.password,
                },
              }}
            >
              <button className="button is-info mb">Edit Settings</button>
            </Link>
            <div className="mt">
              <div className="is-divider is-marginless" data-content="Danger Zone" />
              <div className="columns mt mb">
                <div className="column">
                  <b>Delete this project</b>
                  <p>Once you delete a project, there is no going back. Please be certain.</p>
                </div>
                <div className="column is-narrow">
                  <div className="button is-danger mt is-pulled-left" onClick={this.modalOpen}>
                    Delete Project
                  </div>
                </div>
              </div>
              <div className="is-divider is-marginless" />
              <div className={this.state.active ? 'is-active modal' : 'modal'}>
                <div className="modal-background" />
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Are you sure you want to DELETE your project?</p>
                    <div className="delete" aria-label="close" onClick={this.modalClose} />
                  </header>
                  <section className="modal-card-body">
                    <b className="is-size-5">Please type the name of project to delete: </b>
                    <span className="is-size-5">({this.props.project.name})</span>
                    <input
                      className="input mt"
                      name="projectNameCheck"
                      type="text"
                      onChange={this.onChange}
                      value={this.props.projectNameCheck}
                    />
                  </section>
                  <footer className="modal-card-foot">
                    <button
                      className="button is-danger"
                      disabled={this.state.projectCheck}
                      onClick={this.deleteProject}
                    >
                      Delete
                    </button>
                  </footer>
                </div>
              </div>
            </div>
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
