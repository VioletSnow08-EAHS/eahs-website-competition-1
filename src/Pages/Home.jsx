import React from 'react';
import bground from "./background.png";
import pic1 from "./pic1.png";
import Logo from "./Logo.png"
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Header from "../Components/Header.jsx";
import Navbar from "../Components/Navbar.jsx";
import "./Home.css";
import Footer from "../Components/Footer.jsx";

class App extends React.Component {

	componentDidMount() {
		window.onscroll = function () {
			myFunction()
		};
		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
			if (window.pageYOffset >= sticky) {
				navbar.classList.add("sticky")
			} else {
				navbar.classList.remove("sticky");
			}
		}
	}

	render() {
		return (
			<div className="">
				<Header/>
                <div className="slideshow">
                    <img className="ss-picture" src={bground}/>
	                <h2 className="ss-text">Creating Discord Bots for your <span className="ss-span">every</span> need</h2>
	                <img className="ss-logo" src={Logo} />
                </div>
				<Navbar/>
				<div className="content">
					<h1 className="aboutH1">Specialized bots for discord servers</h1>
					<div className="aboutShort">
						<h1 className="aboutH1">We make fully personalized Discord bots!</h1>
					</div>

				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
