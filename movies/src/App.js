import React from 'react';
//Routing 
import { Switch, Route } from 'react-router-dom';
//Pages
import Home from './pages/HomePage';
import Details from './pages/MoviesDetails';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/details' render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
