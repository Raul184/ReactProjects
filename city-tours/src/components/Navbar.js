import React from 'react'
import "./Navbar.scss";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";


export default function Navbar() {
	return (
		<nav className="Nav">
			<Link to="/"><img src={Logo} alt="Company Logo" /></Link>	
			<ul className="NavLinks">
				<li ><Link to="/" className="Links">
					Home
				</Link></li>
				<li><Link to="/about" className="Links">
					About
				</Link></li>
				<li><Link to="/tours" className="Links">
					Tours
				</Link></li>
			</ul>
		</nav>
	)
}
