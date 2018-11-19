import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Posts from './components/Posts';
// import PostForm from './components/PostForm';
import 'bulma/css/bulma.css';
import './App.css';
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Posts} />
        </header>
      </div>
    );
  }
}

export default withRouter(App);
