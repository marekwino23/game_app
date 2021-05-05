import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Game from './components/Game'
import About from './components/About';
import Contact from './components/Contact';
import Rules from "./components/Rules"
import Customize from "./components/Customize"



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/game">Tic Tac Toe</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/rules">Rules</Link>
            </li>
            <li>
              <Link to="/customize">Customize</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/customize">
            <Customize/>
          </Route>
          <Route path="/rules">
            <Rules/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/game">
            <Game/>
          </Route>
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
