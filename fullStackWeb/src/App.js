import React, { Component } from 'react'
//routing
import { Switch, Route } from 'react-router-dom';
//Components
import Login from './components/Login/Login.js';
import Navbar from './components/Navbar/Nav';
import Signup from './components/Signup/SignUp';
import Footer from './components/Footer';
import Welcome from './components/Welcome/Welcome';
import SingleArticle from './components/SingleArticle/SingleArticleState';
import CreateArticle from './components/CreateArticle/CreateArticle';
import PropTypes from 'prop-types';
//Authentications on Routing
import Auth from './components/Auth/Auth';
import RedirectAuth from './components/Auth/RedirectAuth';
//Adding state to Main comp.
export default class App extends Component {
    state = {
      authUser: null,
      articlesDisplayed: []
    }  
  
  componentDidMount() {
    //user logged ?
    const user = localStorage.getItem( 'user' );
    console.log(user);
    if ( user !== null ) {
      //Single Source of Truth for Main Components
      this.setState({
        authUser: JSON.parse(user)
      });
    }
  }

  //AuthUser after Sign Up
  setAuthUser = (authUser) => {
    this.setState( {
      authUser
    }, () => {
        localStorage.setItem('user', JSON.stringify(authUser));
        this.props.history.push('/');
    });
    console.log(this.state.authUser);
  }
  
  setArtcDisplay = (articles) => {
    this.setState({
      articlesDisplayed: articles
    });
  }
  render() {
    const { location , autentication , articleService} = this.props;
    const { authUser , setAuthUser , articlesDisplayed} = this.state
    return (
      <div>
      {
        location.pathname !== '/login' &&
        location.pathname !== '/signup' && <Navbar authUser={authUser} />
      }
      <Switch>  
        {/* HOME */}
        <Route exact path="/" 
          render={
            (props) => <Welcome {...props} getArticles={articleService.getArticles} displayArtc={this.setArtcDisplay}/>
          }
        />
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
          render={ props =>
            <Signup
              {...props}
              setAuthUser={this.setAuthUser}
              registerUser={autentication.registerUser}
            />
          }
        />
        {/* SINGLE ARTICLE PAGE */}
        <Route path="/article/:slug" 
          render={ props => 
            <SingleArticle
              {...props}
              getSingleArt={articleService.getSingleArt}
              articles={articlesDisplayed}
            />
          }
        />
        <Auth
          path="/articles/create"
          component={CreateArticle}
          props={{
            articleCategories:articleService.getCategories ,
            createArticle:articleService.createArticle ,
            authUser: authUser ? authUser.token : null 
          }}
          isAuthenticated={authUser !==null}
        /> 
          {/* CREATE ARTICLE PAGE */}
        {/* <Route path="/articles/create" 
          render={ props => 
            <CreateArticle
              {...props}
              articleCategories={articleService.getCategories}
              createArticle={articleService.createArticle}
              authUser={authUser.token && authUser.token} 
            />
          }
        /> */}
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  autentication: PropTypes.objectOf(PropTypes.func).isRequired, 
}
