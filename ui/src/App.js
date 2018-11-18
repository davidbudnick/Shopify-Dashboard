import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';

import './App.css';
import 'bulma/css/bulma.css';
require('dotenv').config();
// import { Route, withRouter } from 'react-router-dom';
// import SecuredRoute from './SecuredRoute/SecuredRoute';
// import auth0Client from './Auth';
// import Callback from './Callback';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <PostForm />
            <hr />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
