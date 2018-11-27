import React, { Component } from 'react';
import SideBar from '../elements/SideBar';
import CreateBackup from './CreateBackup';
import { connect } from 'react-redux';
import { getBackups } from '../../actions/backupActions';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export class Backups extends Component {
  componentWillMount() {
    this.props.getBackups(this.props.match.params.projectId);
  }
  render() {
    const backupItems = this.props.backups.map((backup) => (
      <tr>
        <td>{backup.backupId}</td>
        <td>{backup.userId}</td>
        <td>
          <a>Download</a>
        </td>
        <td>{backup.createdAt}</td>
      </tr>
    ));

    return (
      <div className="columns">
        <div className="column is-narrow">
          <SideBar projectId={this.props.match.params.projectId} history={this.props.match} />
        </div>
        <div className="column">
          <div className="ml mt container">
            <div className="columns">
              <div className="column is-narrow">
                <h2 className="title is-2">Current Backups</h2>
              </div>
              <CreateBackup projectId={this.props.match.params.projectId} />
            </div>

            <table className="table is-bordered is-striped is-narrow is-hoverable ">
              <thead>
                <tr>
                  <th>Backup Id</th>
                  <th>User Id</th>
                  <th>Data</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>{backupItems}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Backups.propTypes = { getBackups: propTypes.func.isRequired };
const mapstateToProps = (state) => ({ backups: state.backups.backups });

export default connect(
  mapstateToProps,
  { getBackups },
)(Backups);
