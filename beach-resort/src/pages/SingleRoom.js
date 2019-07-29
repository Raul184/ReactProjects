import React, { Component } from 'react'
import defaultPic from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";


export default class SingleRoom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.match.params.slug,
			defaultPic
		}; 
	}
	static contextType = RoomContext;

	componentDidMount() { }
	
	render() {
		//On click - Selected Room
		const { getSelected } = this.context;
		const room = getSelected(this.state.id);

		console.log(room);
		return (
			<div className="SingleRoom">
				<p>BRO TEST</p>
			</div>
		)
	}
}
