import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./components/About";
import Tours from "./components/Tours";


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
      </Switch>
      <Switch>
        <Route exact path="/about" render={() => <About />} />
      </Switch>  
      <Switch>
        <Route exact path="/tours" render={() => <Tours />} />
      </Switch>  
    </React.Fragment>
  );
}

export default App;
