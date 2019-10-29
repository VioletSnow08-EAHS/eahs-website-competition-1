import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import logo from "./Logo.png";
import "./Navbar.css";

class App extends React.Component {

	render() {

		return (
			<div id="navbar">

				<Link to="/services" className="nav-btn">Services</Link>
				<Link to="/schedule" className="nav-btn">Schedule</Link>
				<img className="logo" src={logo} alt="logo"/>
				<Link to="/faq" className="nav-btn">FAQ</Link>
				<Link to="/about" className="nav-btn">About Us</Link>


			</div>


		);
	}

}

export default App;
