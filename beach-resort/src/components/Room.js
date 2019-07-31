import React from 'react'
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
//TYPES
import PropTypes from "prop-types";
import "./Room.scss";

export default function Room({room}) {
	const { name, slug, pics, price } = room;
	return (
		<article className="Room">
				<img src={pics[0] || defaultImg} alt={name} />
				<div className="price">
					<h6>{price}</h6>
					<p>per night</p>
				</div>
				<Link
					to={`rooms/${ slug }`} className="Room-link">Features
				</Link>
			<p className="Room-info">{name}</p>
		</article>
	)
}
//TYPES ADDED FOR COMPONENT
Room.protoTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		price: PropTypes.number.isRequired
	})
}
