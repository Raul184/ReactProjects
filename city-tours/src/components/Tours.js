import React, { Component } from 'react'
import Tour from "../data/toursData";

export default class Tours extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tours: Tour 
		}
	}
	render() {
		const toursRendered = this.state.tours;
		console.log(toursRendered);
		return (
			<div className="Tours">
				{toursRendered.map(city => <h1>{city.name}</h1>)}
			</div>
		)
	}
}
