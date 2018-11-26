import React, { Component } from 'react';
import Products from '../elements/Products';
import SideBar from '../elements/SideBar';

export class Project extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-narrow">
          <SideBar projectId={this.props.match.params.projectId} history={this.props.history} />
        </div>
        <div className="column">
          <Products projectId={this.props.match.params.projectId} />;
        </div>
      </div>
    );
  }
}

export default Project;
