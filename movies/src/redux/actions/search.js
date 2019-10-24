import Types from './types';
import axios from 'axios';
//to be Refactored
const url = "https://api.themoviedb.org/3/";
const key = 'c6a037cbccebd275ce5948aa040072fb'

//Get released Movies
export const getBusqueda = (str) => dispatch => {
  dispatch({
    type: Types.GET_BUSQUEDA,
    payload: axios.get(`${ url }search/movie?query=${ str }&api_key=${ key }&language=es`)
  }); 
} 
export const clearSearch = () => {
  return {
    type: Types.CLEAR_SEARCH,
    payload: ''
  }
}
