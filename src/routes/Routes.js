import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from '../pages/layouts/Header'
import Dashboard from "../pages/Dashboard";
import ChartBar from "../components/Dashboard/ChartBar";
import CalendarAuth from "../components/Dashboard/CalendarAuth";
// import HeaderDash2 from "../components/Dashboard/HeaderDash copy";
import Subscription from "../components/Dashboard/Subscription";
import ServicePage from "../pages/ServicePage";
import HeaderDash from "../components/Dashboard/HeaderDash";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <HeaderDash/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/service" component={ServicePage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/chart" component={ChartBar} exact />
          <Route path="/subscription" component={Subscription} exact />
          <Route path="/calendar" component={CalendarAuth} exact />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
