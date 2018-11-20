import React, { Component } from 'react';
import Posts from '../elements/Posts';
import NavBar from '../elements/NavBar';
import Products from '../elements/Products';

export class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Products />
        <Posts />
      </div>
    );
  }
}

export default Home;
