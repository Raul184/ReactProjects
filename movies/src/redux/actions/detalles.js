import Types from './types';
import axios from 'axios';
//to be Refactored
const url = "https://api.themoviedb.org/3/movie/";
const key = 'c6a037cbccebd275ce5948aa040072fb'


export const getDetalles = (id) => dispatch => {
  dispatch({
      type: Types.GET_DETALLES,   
      payload: axios.get(`${ url }${id}?api_key=${key}&language=es`)
  }) 
} 