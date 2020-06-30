import React, {Fragment} from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from '../pages/layouts/Header'
import Footer from '../pages/layouts/Footer'
import Dashboard from "../pages/Dashboard";


const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
        <Footer/>
      </Router>
    </Fragment>
  )
}

export default Routes;