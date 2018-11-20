import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Callback from './Callback';
import auth0Client from './Auth';
import SecuredRoute from './components/elements/SecuredRoute';
import NavBar from './components/elements/NavBar';

import './App.css';
import Posts from './components/elements/Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    };
  }

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
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Route exact path="/" component={Home} />
          <SecuredRoute exact path="/posts" component={Posts} />
          <Route exact path="/callback" component={Callback} />
        </header>
      </div>
    );
  }
}

export default withRouter(App);
