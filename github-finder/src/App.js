import React, { Component } from 'react';
import Nav from "./components/Nav";
import Users from "./components/Users";
import Search from "./components/Search";

import './App.css';

export default class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
  //COMPDIDMOUNT
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
  //Alert if EMPTY Submit
  runAlert = (txt, type) => {
    this.setState({
      alert: { msg:txt, type: type }
    });
  }
  //CLEAR
  clear = () => { this.setState({users: ""})}

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <Search searchUser={this.searchUser}
            clear={this.clear}
            display={this.state.users.length > 0 ? true : false}
            runAlert={this.runAlert}
          />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    )
  }
}

