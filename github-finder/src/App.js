import React, { Component } from 'react';
import Nav from "./components/Nav";
import Users from "./components/Users";
import SearchII from "./components/SearchII";
import { Switch, Route } from "react-router-dom";
import UserII from "./components/UserII";

import './App.css';

export default class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }
  //COMPONENTDIDMOUNT
  async componentDidMount() {
    //on loading
    this.setState({
      loading: true
    });
    const request = await fetch(`https://api.github.com/users?client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
    //format
    const format = await request.json();

    //loaded
    this.setState({
      users: format,
      loading: false
    });
  }
  //ON SUBMIT
  searchUser = async(txt) => {
    //Make request
    const request = await fetch(`https://api.github.com/search/users?q=${ txt }&client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
    //format
    const format = await request.json();
    //State
    console.log(format.items);
    this.setState({
      users: format.items,
      loading: false
    })
  }

  //CLEAR
  clear = () => { this.setState({users: ""})}

  //Single USEr Request
  singleUserHandler = async (username) => {
    this.setState({ loading: true })
    //Make request
    const request = await fetch(`https://api.github.com/users/${ username }`);
    // ?client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET 
     //format
    const format = await request.json();
    console.log(format);
    //set User
    this.setState({ user: format, loading: false });
  }

  render() {
    const { users, loading, user } = this.state;
    return (
      <div className="App">
        <Nav />
        <div className="container">
          {/* ROUTES */}
          <Switch>
            <Route exact path='/home'
              render={props => (
              <>
                <SearchII searchUser={this.searchUser}
                clear={this.clear}
                display={users.length > 0 ? true : false}
                // runAlert={this.runAlert}
                />
                <Users loading={loading} users={users} />
              </>
              )}
            />
            <Route exact path='/home/:login' render={ (routeParams) => (
              <UserII
                {...routeParams}
                getUser={this.singleUserHandler}
                user={user}
                loading={loading}
              />
              )}
            />
          </Switch>
          
        </div>
      </div>
    )
  }
}

