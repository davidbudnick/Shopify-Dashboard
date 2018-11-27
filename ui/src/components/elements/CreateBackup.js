import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBackup } from '../../actions/backupActions';

export class CreateBackup extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.createBackup(this.props.projectId);
  }
  render() {
    return (
      <div className="column">
        <form onSubmit={this.onSubmit}>
          <button type="submit" className="button mt ml is-info">
            Backup Products
          </button>
        </form>
      </div>
    );
  }
}

CreateBackup.propTypes = {
  createBackup: propTypes.func.isRequired,
};

export default connect(
  null,
  { createBackup },
)(CreateBackup);
