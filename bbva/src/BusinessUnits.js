import React, { Component } from 'react'
import Form from "./Form";
import BusinessActivitiesDeck from "./BusinessActivitiesDeck";
//Styles
import "./styles/BusinessUnits.css";
//a
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";

export default class BusinessUnits extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedClient: false
		}
	}
	render() {
		const { id } = this.props;
		return (
			<div className="BusinessUnits">
				<nav className="BusinessUnitsSearch">
					<div className="logo">
						<Link to="/">
							<img className="BULogo" src={Logo} alt="BBVA Logo"/>	
						</Link>
        	</div>
					<Form />
				</nav>
				<BusinessActivitiesDeck id={id} />
			</div>
		)
	}
}