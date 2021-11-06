import React from "react";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import './App.css';
import AllStd from "./containers/AllStd";
import Header from "./containers/Header";
import "../src/style/css/app.scss"

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={AllStd} />
      </Switch>
    </Router>
    
      
    </div>
  );
}

export default App;
