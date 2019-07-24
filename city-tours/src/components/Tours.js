import React, { Component } from 'react'
import allTours from "../toursData";
import Navbar from "./Navbar";
import Tour from "./Tour";
import "./Tours.scss";


export default class Tours extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tours: allTours
		}
		this.removeTour = this.removeTour.bind(this);
	}
	//REMOVE Tour
	removeTour(id) {
		const sortedTours = this.state.tours.filter(el => el.id !== id);
		this.setState({
			tours: sortedTours
		});
	}
	render() {
		const toursRendered = this.state.tours;
		return (
			<>
				<Navbar />
				<div className="Tours">
					{toursRendered.map(city =>
						<Tour
							key={city.id} id={city.id} name={city.city} tour={city.name} desc={city.info} image={city.img} remove={this.removeTour}
						/>
					)}
				</div>
			</>
		)
	}
}
