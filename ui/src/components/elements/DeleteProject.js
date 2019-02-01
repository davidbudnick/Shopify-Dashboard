import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../actions/projectActions';

export class DeleteProject extends Component {
  componentWillMount() {
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.deleteProject = this.deleteProject(this);
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    console.log(props);
  }

  modalOpen() {
    this.setState({ active: true });
  }
  modalClose() {
    this.setState({ active: false });
  }
  deleteProject() {
    // this.props.deleteProject(this.props.match.params.projectId);
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
            <section
              className="modal-card-body 
            "
            >
              <b>Please type the name of project to delete:()</b>
            </section>
            <footer className="modal-card-foot">
              <div className="button is-danger" onClick={this.deleteProject}>
                Delete
              </div>
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
