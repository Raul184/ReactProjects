import React from 'react'
import { Link } from "react-router-dom";

export default function Client(props) {
	const { contact } = props;
	
	return (
		<li>
			<span className="filter"><Link to={`${props.route}/${contact.id}`}>{contact.id}</Link></span>
			<span className="filter"><Link to={`${props.route}/${contact.cliente}`}>{contact.cliente}</Link>
			</span>
			<span className="filter">{contact.tipo}</span>
		</li>
	)
}
