import React from 'react';
import Nav from "./components/Nav";
import UserIII from "./components/UserIII";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";


//Context-Reducer
import GithubState from "./context/GithubState";
//styles
import './App.css';

export default function AppIII() {
	return (
		<GithubState>
		<div className="App">
        <Nav />
        <div className="container">
          {/* ROUTES */}
          <Switch>
            <Route exact path='/' render={() => <Home />}/>
            <Route exact path='/user/:login' render={ (routeParams) => (
              <UserIII {...routeParams} />)}
            />
            {/* ERROR */}
            <Route component={Error} />
          </Switch>
          
        </div>
			</div>
		</GithubState>
	)
}
