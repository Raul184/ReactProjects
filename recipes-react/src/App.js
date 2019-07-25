import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import OneRecipe from "./pages/OneRecipe";
import Error from "./pages/Error";
import Nav from "./components/Navbar";


function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/recipes" render={() => <Recipes />} />
        <Route exact path="/recipes/:id" render={() => <OneRecipe />} />
        {/* default page */}
        <Route render={() => <Error />} />
      </Switch>
    </>
  );
}

export default App;
