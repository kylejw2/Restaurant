import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Entree from './components/Entree';
import Nav from './components/Nav';
import AddEntree from './components/AddEntree';
import DeleteEntree from './components/DeleteEntree';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Restaurant</h1>
        <Nav />
        <Switch>
          <Route path="/menu" exact>
            <Menu />
          </Route>
          <Route path="/menu/:id">
            <Entree singleItem={true}/>
          </Route>
          <Route path="/add-entree">
            <AddEntree />
          </Route>
          <Route path="/delete-entree">
            <DeleteEntree />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
