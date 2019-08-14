import React from 'react';
//react Icons
import { FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types'

export default function Nav({title, icon}){
		return (
			<nav className="navbar bg-primary">
				<h1>{icon}{title}</h1>
			</nav> 
		)
}

//Functional
Nav.defaultProps = {
	icon: <FaGithub />,
	title:"Github finder"
}

//prop TYPES
Nav.propTypes = {
	title: PropTypes.string.isRequired
}