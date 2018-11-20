import React, { Component } from 'react';
import NavBar from '../elements/NavBar';
import Posts from '../elements/Posts';

export class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Posts />
      </div>
    );
  }
}

export default Home;
