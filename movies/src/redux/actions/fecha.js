import Types from './types';

//Real Time Date
export const getFecha = () => {
  return {
    type: Types.GET_FECHA,
    payload: new Date()
  }
}
