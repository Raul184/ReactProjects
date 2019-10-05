import React, { Component } from 'react';
//Comp.
import Destacados from '../Components/Destacados';
import Estrenos from '../Components/Estrenos';
import Titulo from '../Components/Titulo';
import { connect } from 'react-redux';
//Redux actions
import { getReleases } from '../redux/actions/moviesActions';

class HomePage extends Component {
  static defaultProps = {
    key: 'c6a037cbccebd275ce5948aa040072fb'
  }

  state = {
    popular: [],
    releases: [],
    random: ""
  }
  //On Mount
  async componentDidMount() {
    try {
      this.props.getReleases();
    } catch (error) {
      if (error.state === 422) {
        console.log('Server Error')
      }
      console.log(error.message);
    }
  }

  //Set a Random Movie
  setRandom(movies) {
    const random = movies[ Math.floor(Math.random() * movies.length) ];
    console.log(random)
    this.setState({ random });
  }

  render() {
    return (
      <>
        <Destacados pelicula={this.state.random} />
        <Titulo>Lo mas visto:</Titulo>
        <Estrenos pelis={this.props.estrenos.data} />
        <Titulo>Proximamente:</Titulo>
        <Estrenos pelis={this.props.estrenos.data} />
      </>
    )
  }
}

//Convertir props de la Store centralizada en propiedas en el deseado Comp.
const mapStateToProps = ({date , estrenos}) => {
  return {
    date , estrenos
  }  
}

export default connect(mapStateToProps, {
  getReleases
})(HomePage);