import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Restaurant</h1>

        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
