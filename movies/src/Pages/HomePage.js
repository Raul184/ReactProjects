import React, { Component } from 'react';
//Comp.
import Destacados from '../Components/Destacados';
import Estrenos from '../Components/Estrenos';
import axios from 'axios';

export default class HomePage extends Component {
  static defaultProps = {
    key: 'c6a037cbccebd275ce5948aa040072fb'
  }

  state = {
    popular: [],
    releases: []
  }
  //On Mount
  async componentDidMount() {
    try {
    //Get Popular 
      const req = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ this.props.key}&language=en-US&page=1`);
    //Get Releases
      const reqII = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ this.props.key}&language=en-US&page=1`);
      this.setState({
        popular: req.data.results,
        releases: reqII.data.results
      });  
    } catch (error) {
      if (error.state === 422) {
        console.log('Server Error')
      }
      console.log(error.message);
    }
  }
  render() {
    return (
      <>
        <Destacados pelis={this.state.popular} />
        <Estrenos pelis={this.state.releases}/>
      </>
    )
  }
}

