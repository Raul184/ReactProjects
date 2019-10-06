import Types from './types';
import axios from 'axios';
//to be Refactored
const url = "https://api.themoviedb.org/3/movie/";
const key = 'c6a037cbccebd275ce5948aa040072fb';

export const getPopular = () => dispatch => {
  dispatch({
      type: Types.GET_POPULAR,   
      payload: axios.get(`${ url }upcoming?api_key=${key}&language=en-US&page=1`)
  }) 
} 