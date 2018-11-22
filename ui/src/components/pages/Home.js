import React, { Component } from 'react';
import Products from '../elements/Products';
import Projects from '../elements/Projects';

export class Home extends Component {
  render() {
    return (
      <div>
        {/* <Products /> */}
        <Projects />
      </div>
    );
  }
}

export default Home;
