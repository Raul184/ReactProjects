import React, { Component } from 'react'
//Comps.
import MostWatched from '../components/MostWatched';
import Releases from '../components/Releases';
//axios
import axios from 'axios';
//Api
import {apiUrl} from '../config/config';


export default class HomePage extends Component {

  state = {
    movies: []
  }

  // Get all movies
  componentDidMount() {
    if (this.state.movies.length <= 0) {
      this.getData();  
    }
  }

  // Get Data from Api
  getData = async () => {
    try {
      const req = await axios.get(`${ apiUrl }`);
      console.log('Va' , req.data.results);
      //check-in state
      this.setState({
        movies: req.data.results
      });
    }
    catch (error) {
      if (error.message === '422') {
        console.log('Server Error');
      }  
      console.log('Error on Request:' , error.message);
    }
    
  }
  render() {
    return (
      <div className="HomePage">
        <MostWatched />
        <Releases films={this.state.movies}/>
      </div>
    )
  } 
}
