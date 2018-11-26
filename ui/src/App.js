import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Callback from './Callback';
import auth0Client from './Auth';
import NavBar from './components/elements/NavBar';
import NotFound from './components/pages/NotFound';
import 'bulma/css/bulma.css';
import Projects from './components/elements/Projects';
import NewProject from './components/elements/NewProject';
import Project from './components/pages/Project';

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
            <Route exact path="/profile/:id" component={Projects} />
            <Route exact path="/newProject/:id" component={NewProject} />
            <Route exact path="/project/:projectId/dashboard" component={Project} />
            <Route exact path="/callback" component={Callback} />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
