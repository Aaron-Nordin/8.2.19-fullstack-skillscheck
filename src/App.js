import React from 'react';
import Header from './components/Header/Header';
import {HashRouter, Link} from "react-router-dom"
import routes from "./routes"
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <hr/>
        <Link to="/">Dashboard</Link>
        <span>  </span>
        <Link to="/wizard">Wizard</Link>
        <hr/>
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
