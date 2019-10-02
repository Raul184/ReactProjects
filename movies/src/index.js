import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
//Redux
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//Index for all reducers
import reducers from './redux/reducers';

//Redux Store
const store = createStore(reducers, {} , applyMiddleware(logger));


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>  
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
