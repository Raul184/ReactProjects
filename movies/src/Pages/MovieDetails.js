import React from 'react';
//CDM for fComps
import { useEffect } from 'react';
import axios from 'axios';  
  
export default function MovieDetails(props) {
  useEffect(() => {
    //Identify movie
    getMovieDetails(props.match.params.movieId);
    return () => {
      //cleanup
    };
  }, [props]);
  
  const getMovieDetails = async (id) => {
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c6a037cbccebd275ce5948aa040072fb`);
      console.log('Details:', result);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      Details
    </div>
  )
}
