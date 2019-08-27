import React, { Component } from 'react'
import './Filter.scss';

export default class Filter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			max: 7000,
			min: 500
		}
	}
	render() {
		return (
			<div className="Filter">
				<h3>Filter</h3>
				<select className="area" name="area">
					<option>Ridgewood</option>
				</select>
				<select className="houseType" name="houseType">
					<option>Ranch</option>
				</select>
				<select className="bedrooms" name="bedrooms">
					<option>2</option>
				</select>
				<div className="filters price">
					<span>Price</span>
					<input type="range" name="min-price" className="min-price" />
				</div>
				<div className="filters floor-space">
					<span>Floor Space</span>
					<input type="range" name="max-price" className="max-price" />
				</div>
				<div className="filters extras">
					<span>Extras</span>
					<label htmlFor="extras">Elevators
					<input name="extras" type="checkbox" value="elevator" /></label>
					
					<label htmlFor="extras">Basement
					<input name="extras" type="checkbox" value="basement" /></label>
					
					<label htmlFor="extras">Parking
					<input name="extras" type="checkbox" value="parking" /></label>
					
					<label htmlFor="extras">Gym
					<input name="extras" type="checkbox" value="gym" /></label>
					
					<label htmlFor="extras">Swimming Pool
					<input name="extras" type="checkbox" value="swimming-pool"/></label>
				</div>
			</div>
		)
	}
}
