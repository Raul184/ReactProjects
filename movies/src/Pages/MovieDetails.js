import React from 'react';
//CDM for fComps
import { useEffect } from 'react';
//Comps.  
import Destacados from '../Components/Destacados';
import Cast from '../Components/Cast';
import Nav from '../Components/Nav';
//redux
import { connect } from 'react-redux';
//Actions 
import { getCredits } from '../redux/actions/credits';
import { getDetalles } from '../redux/actions/detalles';

function MovieDetails(props) {
  useEffect(() => {
    props.getCredits(props.match.params.movieId);
    props.getDetalles(props.match.params.movieId);
    return () => {
      //cleanup
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      <Nav date={props.fecha} path={props.match.path}/>
      <Destacados pelicula={props.detalles.data} />
      <Cast cast={props.creditos.data} />
    </>
  )
}


//Convertir props de la Store centralizada en propiedades.
const mapStateToProps = ({fecha, creditos , detalles}) => {
  return {
    fecha,
    creditos,
    detalles
  }  
}

export default connect(mapStateToProps, {
  getCredits,
  getDetalles
})(MovieDetails);