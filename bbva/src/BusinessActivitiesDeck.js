// DECK Component to get queries from database as Props and feed business units with data
import React, { Component } from 'react'
import Units from "./Units";
//style
import "./styles/BusinessActivitiesDeck.css";
import { Link } from "react-router-dom";
//keys id
const uuidv4 = require('uuid/v4');


export default class Deck extends Component {
	static defaultProps = {
		BusinessUnits: [
			{ name: "Business" , id:"BBVA-Business" },
			{ name: "Risk", id:"BBVA-Risk" },
			{ name: "Potential", id:"BBVA-Potential" },
			{ name: "Commercial Activity", id:"BBVA-Commercial-Activity" },
			{ name: "Transacctions & Interactions", id: "BBVA-Transacctions-Interactions"}
		]
	}
	render() {
		return (
			<div className="Deck">
				{
					[...this.props.BusinessUnits].map(unit => (
						<Link to={`/${this.props.id}/${unit.id}`}>
							<Units
								key={uuidv4()} name={unit.name}
								url={`/${ this.props.id }/${ unit.id }`}
							/>
						</Link>
					))
				}
				
			</div>
		)
	}
}
