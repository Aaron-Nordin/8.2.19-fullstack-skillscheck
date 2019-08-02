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
        <Link to="/">Dashboard</Link>
        <Link to="/wizard">Wizard</Link>
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
