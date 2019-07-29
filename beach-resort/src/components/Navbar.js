import React from 'react'
//icon
import { FaAlignRight } from 'react-icons/fa';
//logo
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
//style
import "./Navbar.scss";

export default function Navbar() {
	//Toogle 
	const [toggle, setToggle] = React.useState(0);
	const handleToggle = () => setToggle(!toggle);
	return (
		<nav className={`${toggle ? "NavDown" : "Navbar"}`}>
			<Link to="/">
				<img src={Logo} alt="Logo" />
			</Link>
			<Link to="/" className="routes">Home</Link>
			<Link to="/rooms" className="routes">Rooms</Link>
			<button type="button" className="navBtn" onClick={handleToggle}>
				<FaAlignRight />
			</button>
		</nav>
	)
}
