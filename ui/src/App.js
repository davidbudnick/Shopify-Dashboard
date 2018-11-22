import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Callback from './Callback';
import auth0Client from './Auth';
import SecuredRoute from './components/elements/SecuredRoute';
import NavBar from './components/elements/NavBar';
import NotFound from './components/pages/NotFound';
import 'bulma/css/bulma.css';
import Posts from './components/elements/Posts';
import Projects from './components/elements/Projects';

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/:id" component={Projects} />
            <SecuredRoute exact path="/posts" component={Posts} />
            <Route exact path="/callback" component={Callback} />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
