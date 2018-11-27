import React, { Component } from 'react';
import SideBar from '../elements/SideBar';

export class Transfer extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-narrow">
          <SideBar projectId={this.props.match.params.projectId} history={this.props.match} />
        </div>
        <div className="column">
          <div>Transfer Project Page</div>
        </div>
      </div>
    );
  }
}

export default Transfer;
