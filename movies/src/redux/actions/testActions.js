import Types from './types';

export const updateDate = () => {
  return {
    type: Types.UPDATE_DATE,
    payload: new Date()
  }
}