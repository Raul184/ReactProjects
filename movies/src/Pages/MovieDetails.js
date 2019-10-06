import React from 'react';
//CDM for fComps
import { useEffect , useState } from 'react';
import axios from 'axios';  
import Destacados from '../Components/Destacados';
import Cast from '../Components/Cast';

export default function MovieDetails(props) {
  useEffect(() => {
    //Identify movie
    getMovieDetails(props.match.params.movieId);
    getMovieDetails(props.match.params.movieId , "credits");
    return () => {
      //cleanup
    };
  }, [props]);
  
  const [ movie, setMovie ] = useState('');
  
  const getMovieDetails = async(id, credits='') => {
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c6a037cbccebd275ce5948aa040072fb`);
      const movieCredits = await axios.get(`https://api.themoviedb.org/3/movie/${id}${credits && "/"+credits}?api_key=c6a037cbccebd275ce5948aa040072fb`);      

      setMovie({
        movie: result.data,
        creditsMovie: movieCredits.data.cast
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Destacados pelicula={movie.movie} />
      <Cast cast={movie.creditsMovie} />
    </>
  )
}
