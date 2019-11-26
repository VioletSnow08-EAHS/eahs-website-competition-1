import React from 'react';
import bground from "./background.png";
import pic1 from "./pic1.png";
import Logo from "./Logo.png"
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Header from "../Components/Header.jsx";
import Navbar from "../Components/Navbar.jsx";
import "./Home.css";
import Footer from "../Components/Footer.jsx";
import ourTeam from "./ourteam.JPG"

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
	                <h2 className="ss-text">Creating Chat Bots for your <span className="ss-span">every</span> need</h2>
	                <img className="ss-logo" src={Logo} />
                </div>
				<Navbar/>
				<div className="content">
					<h1 className="aboutH1">Specialized Bots and Social Media Dashboards for YOUR business.</h1>
					<div className="aboutShort">
						<h1 className="aboutH1">We make fully personalized Discord bots, Facebook Bots, and Web Panels!</h1>
					</div>
					<div className="homeInfoDiv">
					<div className="homeParagraph1">
						<p>
						We are SocialBot. SocialBot is a company designed for your personal needs. We create ChatBots for many sites such as Discord, Facebook, Twitter, and also feature Social Media Dashboards!! Customers absolutely love SocialBot and come back for their next need. Here is what some of them got to say.
						</p>
						<h1>Our Team</h1>
						<img src={ourTeam} />

					</div>
					
					<div className="homeParagraph2">
						<p><span className="customerName">Mr. Tanczos</span><span className="customerSaying"> - "SocialBot is an amazing company. They designed my chatbot for my business and customers are loving it!"</span></p>
						<p><span className="customerName">Mr. Geiger</span><span className="customerSaying"> - "My business was struggling recently, until I found SocialBot. They helped me interact with customers easily, and my business grew from it! Thanks SocialBot!"</span></p>
						<p><span className="customerName">Abraham Lincoln</span><span className="customerSaying"> - "I needed a way to talk during the Civil War. No one uses the Telegraph and the Pony Express was too slow. Then I found SocialBot. They developed a bot that let me interact with my followers and update them on everything I can! SocialBot is my first choice."</span></p>
					</div>
	
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
