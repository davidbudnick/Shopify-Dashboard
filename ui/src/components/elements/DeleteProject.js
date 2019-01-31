import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../actions/projectActions';

export class DeleteProject extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="mt">
        <div className="is-divider is-marginless" data-content="Danger Zone" />
        <div className="columns mt mb">
          <div className="column">
            <b>Delete this project</b>
            <p>Once you delete a project, there is no going back. Please be certain.</p>
          </div>
          <div className="column is-narrow">
            <button className="button is-danger mt is-pulled-left" type="submit">
              Delete Project
            </button>
          </div>
        </div>
        <div className="is-divider is-marginless" />
        <div className="modal ">
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Are you sure you want to delete your project?</p>
              <button className="delete" aria-label="close" />
            </header>
            <section className="modal-card-body" />
            <footer className="modal-card-foot">
              <button className="button is-warning">Cancel</button>
              <button className="button is-danger">Delete</button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

DeleteProject.propTypes = {
  deleteProject: propTypes.func.isRequired,
};
export default connect(
  null,
  { deleteProject },
)(DeleteProject);
