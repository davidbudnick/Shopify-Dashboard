import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import 'bulma/css/bulma.css';
import './App.css';
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
        </header>
      </div>
    );
  }
}

export default withRouter(App);
