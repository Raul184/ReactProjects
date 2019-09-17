import React, { Component } from 'react'
//Comps.
import MostWatched from '../components/MostWatched';
import Releases from '../components/Releases';

export default class HomePage extends Component {

  // Get all movies
  componentDidMount() {
      
  }
  // Get Data from Api
  getData = () => {
    
  }

  render() {
    return (
      <div className="HomePage">
        <MostWatched />
        <Releases />
      </div>
    )
  }
}
