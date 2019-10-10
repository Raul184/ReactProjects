import React, { Component } from 'react';
//Comp.
import Destacados from '../Components/Destacados';
import Estrenos from '../Components/Estrenos';
import Titulo from '../Components/Titulo';
import Nav from '../Components/Nav';
import SearchResults from '../Components/SearchResults';
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
    const { search, estrenos, popular } = this.props
    return (
      <>
        <SearchResults data={search.searchInput}/>
        <Nav path={this.props.match.path}/>
        <Destacados pelicula={estrenos.random} />
        <Titulo>Lo mas visto:</Titulo>
        <Estrenos pelis={estrenos.data} />
        <Titulo>Proximamente:</Titulo>
        <Estrenos pelis={popular.dataII} />
      </>
    )
  }
}

//Convertir props de la Store centralizada en propiedades.
const mapStateToProps = ({estrenos , popular , search}) => {
  return {
    popular,
    estrenos,
    search
  }  
}

export default connect(mapStateToProps, {
  getEstrenos,
  getPopular
})(HomePage);