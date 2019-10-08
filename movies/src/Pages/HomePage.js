import React, { Component } from 'react';
//Comp.
import Destacados from '../Components/Destacados';
import Estrenos from '../Components/Estrenos';
import Titulo from '../Components/Titulo';
import Nav from '../Components/Nav';
import { connect } from 'react-redux';
//Redux actions
import { getEstrenos} from '../redux/actions/estrenos';
import { getPopular } from '../redux/actions/popular';


class HomePage extends Component {
  async componentDidMount() {
    try {
      this.props.getEstrenos();
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
        <Nav date={this.props.fecha} path={this.props.match.path}/>
        <Destacados pelicula={this.props.estrenos.random} />
        <Titulo>Lo mas visto:</Titulo>
        <Estrenos pelis={this.props.estrenos.data} />
        <Titulo>Proximamente:</Titulo>
        <Estrenos pelis={this.props.popular.dataII} />
      </>
    )
  }
}

//Convertir props de la Store centralizada en propiedades.
const mapStateToProps = ({estrenos , popular , fecha}) => {
  return {
    fecha,
    popular,
    estrenos
  }  
}

export default connect(mapStateToProps, {
  getEstrenos,
  getPopular
})(HomePage);