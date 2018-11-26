import React, { Component } from 'react';

export class SideBar extends Component {
  componentWillMount() {
    console.log(this.props);
    console.log(this.props.history.path.substring(20));
  }
  render() {
    let pageName = this.props.history.path.substring(20);

    return (
      <aside className="menu ml mt">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a className={pageName === 'dashboard' ? 'is-active' : ''}>Dashboard</a>
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
            <a>Store Settings</a>
          </li>
          <li>
            <a>Refresh</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideBar;
