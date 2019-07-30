import React, { Component } from 'react'
// import defaultPic from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";
//styles
import './SingleRoom.scss';
const uuidv4 = require('uuid/v4');

export default class SingleRoom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.match.params.slug
			// defaultPic
		}; 
	}
	static contextType = RoomContext;

	componentDidMount() { }

	render() {
		//On click - Selected Room
		const { getSelected } = this.context;
		const room = getSelected(this.state.id);
		if (!room) {
			return (
				<Banner title="Sorry, room was booked just now">
					<Link to="/rooms" className="btn-primary">
						Back to rooms
					</Link>
				</Banner>
			)
		}
		const { name, description, capacity,price, size, pets, breakfast, extras, images } = room;
		//Non-repeat Imgs
		const [mainImg, ...defaultImgs] = images;
		return (
			<>
				<StyledHero img={mainImg.fields.file.url}>
					<Banner title={`${ name } room`}>
						<Link to="/rooms" className="btn-primary">Check for another one</Link>
					</Banner>
				</StyledHero>
				<section className="SingleRoom-imgs">
					{defaultImgs.map((pic) => (
						<img key={uuidv4()} src={`${pic.fields.file.url}`} alt={name}/>
					))}
				</section>
				<section className="single-room-info">
					<article className="desc">
						<h3>details</h3>
						<p>{description}</p>
					</article>
					<article className="info">
						<h3>info</h3>
						<h6>price: ${price}</h6>
						<h6>size: ${size}SQFT</h6>
						<h6>max. capacity:
							${
								capacity > 1 ? `${ capacity } people` : `${ capacity } person`
							}
						</h6>
						<h6>pets allowed: {pets ? "Yes" : "No"}</h6>
						<h6>{breakfast && "free breakfast included"}</h6>
					</article>
				</section>
				<section className="extras">
					<h3>extras</h3>
					<ul className="extras">
						{extras.map(item => (
							<li key={uuidv4()}>{item}</li>
						))}
					</ul>
				</section>
			</>
		) 
	}
}
