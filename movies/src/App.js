import React from 'react';
// import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetails';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { updateDate } from './redux/actions/fecha';
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
        <Nav date={this.props.date.fecha} />
        <Router>
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
        </Router>
        <Footer />
      </>
    );
  }
}


function mapStateToProps({ date }){
  return { date }
}

export default connect(mapStateToProps, {
  updateDate
}) (App);
