import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SideBar extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    let pageName = this.props.history.path.substring(20);

    return (
      <aside className="menu ml mt sidebar">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link
              to={{ pathname: `/project/${this.props.projectId}/dashboard` }}
              className={pageName === 'dashboard' ? 'is-active' : ''}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li>
            <a>Authentication</a>
          </li>
        </ul>
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li>
            <Link
              to={{ pathname: `/project/${this.props.projectId}/settings` }}
              className={pageName === 'settings' ? 'is-active' : ''}
            >
              Store Settings
            </Link>
          </li>
          <li>
            <a>Refresh</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideBar;
