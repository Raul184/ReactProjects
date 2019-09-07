import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter} from 'react-router-dom';

import Login from './components/Login'
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';

import registerServiceWorker from './registerServiceWorker';

//Adding state to Main comp.

class App extends React.Component {
  
  state = {
    authUser: null
  }

  componentDidMount() {
    //user logged ?
    const user = localStorage.getItem( 'user' );

    if ( user ) {
      //Single Source of Truth for Main Components
      this.setState( {
        authUser: JSON.parse(user)
      })
    }
  }
  
  render() {
    const { location } = this.props;
    console.log( this.state.authUser );
    return (
      <div>
      {
        location.pathname !== '/login' &&
        location.pathname !== '/signup' && <Navbar authUser={this.state.authUser} />
      }
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={SingleArticle} />
      <Route path="/articles/create" component={CreateArticle} />
      {
        location.pathname !== '/login' &&
        location.pathname !== '/signup' && <Footer /> 
      }
      </div>
    )
  }
}



//HIgh Order Comp.  ++ Routing added to footer && Nav
const Main = withRouter( ( props ) => {
  return (
    <App {...props} />
  );
} );  

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  , document.getElementById( 'root' )
);

registerServiceWorker();
