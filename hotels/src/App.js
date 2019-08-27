import React from 'react';
//Components
import Header from './components/Header';
//Pages
import Home from './pages/Home';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import Ads from './pages/Ads';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';
//Router
import { Switch, Route } from 'react-router-dom';
//css
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/createAds" render={() => <Ads />} />
        <Route exact path="/AboutUs" render={() => <AboutUs/>} />
        <Route exact path="/LogIn" render={() => <LogIn />} />
        <Route exact path="/Register" render={() => <Register />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
