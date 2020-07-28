import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Entree from './components/Entree';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Restaurant</h1>

        <Switch>
          <Route path="/menu" exact>
            <Menu />
          </Route>
          <Route path="/menu/:id">
            <Entree singleItem={true}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
