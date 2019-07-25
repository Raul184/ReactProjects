import React from 'react'
import "./Header.scss";
import { Link } from "react-router-dom";

//defaults
Header.defaultProps = {
	title: 'default title',
	styleClass: 'main-header'
}

export default function Header({ children, title, styleClass }) {
	return (
		<header className={`${styleClass}`}>
			<h1>{title}</h1>
			{children}
			<Link to="/recipes">Search Recipes</Link>
		</header>
	)
}


