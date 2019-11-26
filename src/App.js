import React from 'react';
import Home from "./Pages/Home.jsx";
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
	return (
		<div className="navbar">
			<Router>

				<Switch>
					<Route exact path="/" component={Home}/>


                </Switch>

			</Router>
		</div>
);
}

export default App;
