import React, { Component } from 'react';
import SideBar from './SideBar';

export class Clone extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-narrow">
          <SideBar projectId={this.props.match.params.projectId} history={this.props.match} />
        </div>
        <div className="column">
          <div className="ml mt container">
            <div className="columns">
              <div className="column is-narrow">
                <h2 className="title is-unselectable titleText is-size-1">Clone Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clone;
