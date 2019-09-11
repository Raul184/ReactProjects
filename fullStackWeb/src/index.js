import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter} from 'react-router-dom';
import App from './App';
//Services
import AuthService from './services/auth';


//High Order Comp.  ++ Routing props enhancement
const Main = withRouter(
  props =>
    <App
      autentication={new AuthService()}
      {...props}
    />
);  


//RENDER APP

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter> ,
  document.getElementById('root')
);

