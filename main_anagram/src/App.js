import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import ViewHistory from './components/attendance/ViewHistory'
import CreateEmployee from './components/attendance/CreateEmployee'
import DeleteEmployee from './components/attendance/DeleteEmployee'
import UpdateEmployee from './components/attendance/UpdateEmployee'
import ViewSummary from './components/attendance/ViewSummary'
// import EmployeeStatus from './components/attendance/EmployeeStatus'
// import ViewSum from './components/attendance/ViewSum'
import Bonus from './components/attendance/Bonus'

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
            <Route path='/summary' component={ViewSummary} />
            <Route path='/delete' component={DeleteEmployee} />
            <Route path='/create' component={CreateEmployee} />
            <Route path='/update' component={UpdateEmployee} />
            {/* <Route path='/viewsum' component={ViewSum} /> */}
            {/* <Route path= '/statuscheck/:id' component={EmployeeStatus} /> */}
            <Route path= '/bonus' component={Bonus} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;