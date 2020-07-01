import React, {Fragment} from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Header from '../pages/layouts/Header'
import Dashboard from "../pages/Dashboard";
import ChartBar from "../components/Dashboard/ChartBar";
import CalendarAuth from "../components/Dashboard/CalendarAuth";
import HeaderDash2 from "../components/Dashboard/HeaderDash copy";
import Subscription from "../components/Dashboard/Subscription";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <HeaderDash2/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/chart" component={ChartBar} exact />
          <Route path="/subscription" component={Subscription} exact />
          <Route path="/calendar" component={CalendarAuth} exact />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default Routes;