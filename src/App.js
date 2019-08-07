//INSTRUCTIONS ARE SAVED ON SIMULATION-2 REPOSITORY

import React from "react";
import Header from "./components/Header/Header";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <hr />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
