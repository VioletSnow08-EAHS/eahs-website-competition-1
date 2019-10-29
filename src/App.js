import React from 'react';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Navbar from "./Components/Navbar.jsx";
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
	return (
		<div className="navbar">
			<Router>

				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/services" component={Services}/>

                </Switch>

			</Router>
		</div>
);
}

export default App;