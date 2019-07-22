import React, { Component } from 'react'
//Routing
import { Route, Switch } from "react-router-dom";
//Root
import Home from "./Home";
//Corporate && Individual Branches
import ListadoClientes from './ListadoClientes';
import DinamicTable from "./DinamicTable";

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
          <Route exact path="/Person"
            render={(routeParams) =>
              <ListadoClientes id="Person" {...routeParams} />}
          />
      </Switch>
      {/* //Corporate Segment */}
      <Switch>
          <Route exact path="/Branch"
            render={(routeParams) =>
              <ListadoClientes id="Branch" {...routeParams} />} />
      </Switch>
      <Switch>
          <Route exact path="/Branch/:name"
            render={(routeParams) =>
              <DinamicTable {...routeParams} />} />
      </Switch>
      </>
    )
  }
}

