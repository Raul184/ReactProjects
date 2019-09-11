import React, { Component } from 'react'
//routing
import { Switch, Route } from 'react-router-dom';
//Components
import Login from './components/Login/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup/SignUp';
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
    const { authUser , setAuthUser} = this.state
    return (
      <div>
      {
        location.pathname !== '/login' &&
        location.pathname !== '/signup' && <Navbar authUser={authUser} />
      }
      <Switch>  
        {/* HOME */}
        <Route exact path="/" component={Welcome} />
        {/* LOGIN */}
        <Route path="/login" 
            render={(props) => 
              <Login
                {...props}
                setAuthUser={setAuthUser}
                login={autentication.login}
              />
            }
        />
        {/* SIGN UP USER */}
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
