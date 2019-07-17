import React, { Component } from 'react'
//Routing
import { Route, Switch } from "react-router-dom";
//Root
import Home from "./Home";
//Corporate && Individual Branches
import BusinessUnits from './BusinessUnits';
import UnitsDashboard from "./UnitsDashboard";
import ChartSamplesII from './AllCharts/ChartSamplesII';


export default class App extends Component {
  render() {
    return (
      <>
      {/* //Root */}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
      {/* //Persons Segment */}
      <Switch>
        <Route exact path="/Person" render={() => <BusinessUnits id="Person"/>} />
      </Switch>
      {/* //Corporate Segment */}
      <Switch>
        <Route exact path="/Branch" render={() => <BusinessUnits id="Branch"/>} />
      </Switch>
      <Switch>
        <Route exact path="/Branch/:id"
          render={(routeParams) => <UnitsDashboard {...routeParams} />} />
      </Switch>
      <Switch>
        <Route exact path="/Person/:id"
          render={(routeParams) => <UnitsDashboard {...routeParams} />} />
      </Switch>
      <Switch>
        <Route exact path="/Branch/BBVA-Risk/Solutions"
          render={() => <ChartSamplesII />}/>
      </Switch>  
      </>
    )
  }
}

