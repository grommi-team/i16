import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Invitado from './modules/invitado/Invitado';
import Administrador from './modules/administrador/Administrador';
import Login from './modules/login/Login';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path='/admin' render={() => <Administrador />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/' render={() => <Invitado />} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;