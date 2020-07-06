import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChartBar from "../components/Dashboard/ChartBar";
import CalendarAuth from "../components/Dashboard/CalendarAuth";
import Subscription from "../components/Dashboard/Subscription";
import ServicePage from "../pages/ServicePage";
import Header from '../pages/layouts/Header';
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/service" component={ServicePage} exact />
          <Route path="/chart" component={ChartBar} exact />
          <Route path="/subscription" component={Subscription} exact />
          <Route path="/calendar" component={CalendarAuth} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
