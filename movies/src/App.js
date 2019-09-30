import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetails';
import Nav from './Components/Nav';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Nav />
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

export default App;
