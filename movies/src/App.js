import React from 'react';
// import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetails';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { updateDate } from './redux/actions/Actions';
//Redux 'bridge'
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.updateDate()
    }, 1000);
  }
  render() {
    return (
      <>
        <Nav date={this.props.test.fecha}/>
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
}


function mapStateToProps({ test }){
  return { test }
}

export default connect(mapStateToProps, {
  updateDate
}) (App);
