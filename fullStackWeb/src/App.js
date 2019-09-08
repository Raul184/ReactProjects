import React, { Component } from 'react'
//routing
import { Switch, Route } from 'react-router-dom';
//Components
import Login from './components/Login'
import Navbar from './components/Navbar';
import Signup from './components/Signup/index';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';
import PropTypes from 'prop-types';

//Adding state to Main comp.

export default class App extends Component {
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

  //AuthUser after Sign Up
  setAuthUser = (authUser) => {
    this.setState( {
      authUser
    });
    console.log(this.state.authUser);
  }
  
  render() {
    const { location , autentication} = this.props;
    
    return (
      <div>
      {
        location.pathname !== '/login' &&
        location.pathname !== '/signup' && <Navbar authUser={this.state.authUser} />
      }
      <Switch>  
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup"
          render={ ( props ) =>
            <Signup
              {...props}
              setAuthUser={this.setAuthUser}
              registerUser={autentication.registerUser}
            />
          }
        />
        <Route path="/article/:slug" component={SingleArticle} />
        <Route path="/articles/create" component={CreateArticle} />
      </Switch>
      {
        location.pathname !== '/login' &&
        location.pathname !== '/signup' && <Footer /> 
      }
      </div>
    )
  }
}

//Proptypes

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  autentication: PropTypes.objectOf(PropTypes.func).isRequired, 
}
