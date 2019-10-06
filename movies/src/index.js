import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';
//Index for all reducers
//Reducers
import fecha  from './redux/reducers/fecha';
import estrenos from './redux/reducers/estrenos';
import popular from './redux/reducers/popular';
import creditos from './redux/reducers/creditos';
import detalles from './redux/reducers/detalles';
import search from './redux/reducers/search'; 

//Redux Store
const store = createStore(
  combineReducers({
    fecha,
    estrenos,
    popular,
    creditos,
    detalles,
    search
  }),
  {},
  compose(applyMiddleware(promise , reduxThunk , logger))
)
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>  
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
