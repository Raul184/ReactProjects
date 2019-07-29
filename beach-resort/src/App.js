import React from 'react';
import './App.scss';
//Components
import Nav from "./components/Navbar.js";
//Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Home";
//ROuting
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/rooms/" render={() => <Rooms />} />
        <Route exact path="/rooms/:slug" render={
          (routeParams) => <SingleRoom {...routeParams} />}
        />
        <Route render={() => <Error />} />
      </Switch>
      
    </>
  );
}

export default App;
