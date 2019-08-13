import React, { Component } from 'react';
import Nav from "./components/Nabvar";
import UserItem from "./components/UserItem";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <UserItem />
      </>
    )
  }
}

