import React, { Component } from 'react';
//Comp.
import Destacados from '../Components/Destacados';
import Estrenos from '../Components/Estrenos';
import Titulo from '../Components/Titulo';
import { connect } from 'react-redux';
//Redux actions
import { getReleases} from '../redux/actions/releases';
import { getPopular } from '../redux/actions/popular';


class HomePage extends Component {

  async componentDidMount() {
    try {
      this.props.getReleases();
      this.props.getPopular();
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
        <Destacados pelicula={this.props.estrenos.random} />
        <Titulo>Lo mas visto:</Titulo>
        <Estrenos pelis={this.props.estrenos.data} />
        <Titulo>Proximamente:</Titulo>
        <Estrenos pelis={this.props.popular.data} />
      </>
    )
  }
}

//Convertir props de la Store centralizada en propiedades.
const mapStateToProps = ({date , estrenos , popular}) => {
  return {
    date , estrenos , popular
  }  
}

export default connect(mapStateToProps, {
  getReleases,
  getPopular
})(HomePage);