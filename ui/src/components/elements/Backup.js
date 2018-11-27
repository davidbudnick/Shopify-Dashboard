import React, { Component } from 'react';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { getBackup } from '../../actions/backupActions';
import propTypes from 'prop-types';

export class Backup extends Component {
  componentWillMount() {
    this.props.getBackup(this.props.match.params.backupId);
  }
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-narrow">
            <SideBar projectId={this.props.match.params.projectId} />
          </div>
          <div className="column">
            <div>Backup Page</div>
          </div>
        </div>
      </div>
    );
  }
}

Backup.propType = { getBackup: propTypes.func.isRequired };
const mapStateToProps = (state) => ({ backup: state.backups.backup });

export default connect(
  mapStateToProps,
  { getBackup },
)(Backup);
