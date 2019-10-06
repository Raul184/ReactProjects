import Types from './types';
import axios from 'axios';
//to be Refactored
const url = "https://api.themoviedb.org/3/movie/";
const key = 'c6a037cbccebd275ce5948aa040072fb'

//Get released Movies
export const getEstrenos = () => dispatch => {
  dispatch({
      type: Types.GET_ESTRENOS,   
      payload: axios.get(`${ url }now_playing?api_key=${key}&language=en-US&page=1`)
  }) 
} 
