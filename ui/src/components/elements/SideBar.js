import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SideBar extends Component {
  render() {
    let pageName = this.props.history ? this.props.history.path.substring(20) : '';

    return (
      <aside className="menu ml mt sidebar">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link
              to={{ pathname: `/project/${this.props.projectId}/dashboard/` }}
              className={pageName === 'dashboard' ? 'is-active' : ''}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        {/* <ul className="menu-list">
          <li>
            <Link
              to={{ pathname: `/project/${this.props.projectId}/projects` }}
              className={pageName === 'projects' ? 'is-active' : ''}
            >
              Projects
            </Link>
          </li>
        </ul> */}
        <p className="menu-label">Tools</p>
        <ul className="menu-list">
          <li>
            <Link
              to={{ pathname: `/project/${this.props.projectId}/backups/` }}
              className={pageName === 'backups' ? 'is-active' : ''}
            >
              Backup Project
            </Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li>
            <Link
              to={{ pathname: `/project/${this.props.projectId}/transfer/` }}
              className={pageName === 'transfer' ? 'is-active' : ''}
            >
              Transfer Products
            </Link>
          </li>
        </ul>
        <p className="menu-label">Store Settings</p>
        <ul className="menu-list">
          <li>
            <Link
              to={{ pathname: `/project/${this.props.projectId}/settings/` }}
              className={pageName === 'settings' ? 'is-active' : ''}
            >
              Project Settings
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideBar;
