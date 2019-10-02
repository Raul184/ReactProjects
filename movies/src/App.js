import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetails';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
//Redux 'bridge'
import { connect } from 'react-redux';


function App(props) {
  return (
    <>
      <Nav date={props.test.fecha}/>
      <Switch>
        <Route exact path='/'
          render={
            () => <HomePage />
          }
        />
        <Route exact path='/details/:movieId'
          render={
            (routeParams) => <MovieDetails {...routeParams} />
          }
        />
      </Switch>
      <Footer />
    </>
  );
}

function mapStateToProps({ test }){
  return { test }
}

export default connect( mapStateToProps) (App);
