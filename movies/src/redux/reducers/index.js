//Index
import { combineReducers } from 'redux';
//Reducers
import rootReducer from './root';

export default combineReducers({ 
  test: rootReducer
})