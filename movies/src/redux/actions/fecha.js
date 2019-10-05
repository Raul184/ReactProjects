import Types from './types';

//Real Time Date
export const updateDate = () => {
  return {
    type: Types.UPDATE_DATE,
    payload: new Date()
  }
}
