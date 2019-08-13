import React, { Component } from 'react';
//react Icons
import { FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types'

export default class Nabvar extends Component {
	static defaultProps = {
		icon: <FaGithub />,
		title:"Github finder"
	}
	//prop TYPES
	static propTypes = {
		title: PropTypes.string.isRequired
	}
	render() {
		const { title , icon } = this.props;
		return (
			<nav className="navbar bg-primary">
				<h1>{icon}{title}</h1>
			</nav> 
		)
	}
}
