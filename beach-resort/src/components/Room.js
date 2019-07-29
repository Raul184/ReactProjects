import React from 'react'
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
//TYPES
import PropTypes from "prop-types";

export default function Room({room}) {
	console.log(room);
	const { name, slug, pics, price } = room;
	return (
		<article className="Room">
			<div className="Room-Image-Container">
				<img src={pics[0] || defaultImg} alt={name} />
				<div className="price">
					<h6>{price}</h6>
					<p>per night</p>
				</div>
				<Link
					to={`rooms/${ slug }`} className="Room-link">Features
				</Link>
			</div>
			<p className="Room-info">{name}</p>
		</article>
	)
}

Room.protoTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		price: PropTypes.number.isRequired
	})
}
