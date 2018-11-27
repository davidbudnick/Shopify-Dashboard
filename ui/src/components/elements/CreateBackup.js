import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBackup } from '../../actions/backupActions';

export class CreateBackup extends Component {
  render() {
    return (
      <div className="column">
        <div className="button mt ml is-info" onClick={this.props.createBackup(this.props.projectId)}>
          Backup Products
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { createBackup },
)(CreateBackup);
