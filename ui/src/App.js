import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Posts from './components/Posts';
// import PostForm from './components/PostForm';
import SecuredRoute from './components/SecuredRoute';
import auth0Client from './Auth';
import Callback from './components/Callback';
import Auth0 from './components/Auth0';
import './App.css';
import 'bulma/css/bulma.css';
require('dotenv').config();

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log(err.error);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Auth0 />
            {/* <PostForm />
            <hr />
            <Posts /> */}
            <Route exact path="/callback" component={Callback} />
            <SecuredRoute path="/" component={Posts} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
