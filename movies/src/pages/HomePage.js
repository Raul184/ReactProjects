import React, { Component } from 'react'
//Comps.
import MostWatched from '../components/MostWatched';
import Releases from '../components/Releases';

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <MostWatched />
        <Releases />
      </div>
    )
  }
}
