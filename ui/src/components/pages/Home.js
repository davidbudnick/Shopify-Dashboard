import React, { Component } from 'react';
import Posts from '../elements/Posts';
import NavBar from '../elements/NavBar';

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
