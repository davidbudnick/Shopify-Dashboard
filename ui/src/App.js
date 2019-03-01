import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Callback from './components/elements/Callback';
import auth0Client from './components/elements/Auth';
import NavBar from './components/elements/NavBar';
import NotFound from './components/pages/NotFound';
import Projects from './components/elements/Projects';
import NewProject from './components/elements/NewProject';
import Settings from './components/elements/Settings';
import Backups from './components/elements/Backups';
import Product from './components/pages/Project';
import Backup from './components/elements/Backup';
import SettingsEdit from './components/elements/SettingsEdit';
import Clone from './components/elements/Clone';

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
            <Route exact path="/project/:projectId/dashboard" component={Product} />
            {/* <Route exact path="/project/:projectId/projects" component={Products} /> */}
            <Route exact path="/project/:projectId/settings" component={Settings} />
            <Route exact path="/project/:projectId/settings/edit" component={SettingsEdit} />
            <Route exact path="/project/:projectId/backups" component={Backups} />
            <Route exact path="/project/:projectId/backups/backup/:backupId" component={Backup} />
            <Route exact path="/project/:projectId/clone" component={Clone} />
            <Route exact path="/callback" component={Callback} />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
