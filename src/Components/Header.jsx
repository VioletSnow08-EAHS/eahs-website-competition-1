import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import logo from "./Logo.png";
import "./Navbar.css";

class App extends React.Component {
  render() {
   
    return (
      <div id="header">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">SetBot</h1>
      </div>
    );
  }
  
}

export default App;
