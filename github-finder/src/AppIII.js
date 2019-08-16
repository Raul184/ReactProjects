import React from 'react';
import Nav from "./components/Nav";
import UserIII from "./components/UserIII";
import UsersIII from "./components/UsersIII";
import SearchIII from "./components/SearchIII";
import { Switch, Route } from "react-router-dom";

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
            <Route exact path='/home'
              render={() => (
              <>
								<SearchIII/>
                <UsersIII/>
              </>
              )}
            />
            <Route exact path='/home/:login' render={ (routeParams) => (
              <UserIII
                {...routeParams}
              />
              )}
            />
          </Switch>
          
        </div>
			</div>
		</GithubState>
	)
}
