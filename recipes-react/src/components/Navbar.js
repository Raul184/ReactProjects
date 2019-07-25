import React from 'react'
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Navbar() {
	return (
		<nav className="Navbar">
			<Link to="/">
				<img src={logo} alt="company"/>
			</Link>
			<Link to="/">Home</Link>
			<Link to="/recipes">Recipes</Link>
		</nav>		
	)
}
