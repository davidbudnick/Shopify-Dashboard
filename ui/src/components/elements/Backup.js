import React, { Component } from 'react';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { getBackup } from '../../actions/backupActions';
import propTypes from 'prop-types';
import Moment from 'react-moment';
import JSONTree from 'react-json-tree';
import axios from 'axios';

export class Backup extends Component {
  componentWillMount() {
    this.props.getBackup(this.props.match.params.backupId);
  }
  download(id) {
    console.log('download');
    axios
      .get(`http://localhost:4000/backups/download/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const theme = {
      scheme: 'monokai',
      author: 'wimer hazenberg (http://www.monokai.nl)',
      base00: '#272822',
      base01: '#383830',
      base02: '#49483e',
      base03: '#75715e',
      base04: '#a59f85',
      base05: '#f8f8f2',
      base06: '#f5f4f1',
      base07: '#f9f8f5',
      base08: '#f92672',
      base09: '#fd971f',
      base0A: '#f4bf75',
      base0B: '#a6e22e',
      base0C: '#a1efe4',
      base0D: '#66d9ef',
      base0E: '#ae81ff',
      base0F: '#cc6633',
    };
    return (
      <div>
        <div className="columns">
          <div className="column is-narrow">
            <SideBar projectId={this.props.match.params.projectId} />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-narrow">
                <p className="title is-1 is-spaced">{this.props.backup.backupId}</p>
              </div>
              <div className="column mt">
                <div className="button is-info mt" onClick={this.download(this.props.match.params.backupId)}>
                  Download
                </div>
              </div>
            </div>
            <p className="subtitle is-3">
              <Moment>{this.props.backup.createdAt}</Moment>
            </p>

            <div>
              <JSONTree
                data={this.props.backup.products}
                theme={theme}
                invertTheme={false}
                shouldExpandNode={() => true}
              />
            </div>
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
