import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import ViewHistory from './components/attendance/ViewHistory'
import CreateEmployee from './components/attendance/CreateEmployee'
import DeleteEmployee from './components/attendance/DeleteEmployee'
import UpdateEmployee from './components/attendance/UpdateEmployee'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/signIn' component={SignIn} />
            <Route path='/view' component={ViewHistory} />
            <Route path='/delete' component={DeleteEmployee} />
            <Route path='/create' component={CreateEmployee} />
            <Route path='/update' component={UpdateEmployee} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;