import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1024x576.jpg

import './styles/SlidingHeader.css'
export default class SlidingHeader extends Component {
	constructor() {
		super();
		this.state = {
			activeMenu : false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	//handleClick
	handleClick() {
		console.log('click');
		this.setState({
			activeMenu : !this.state.activeMenu
		})
	}
	render() {
		return (
			<div className={`${this.state.activeMenu ? "container--open" : "container" }`}>
			<div className="Sliding-intro">
				<img className="Intro-img" src={"https://www.bbva.com/wp-content/uploads/2019/06/Marqueex2-1920x899.png"} alt="bbva homepage" />
				<div className="Intro-content">
					<h1 className="Intro-title">BBVA Global</h1>
					<div className="Intro-sub">
						<div className="Intro-links">
							<i className="fa fa-user-circle" aria-hidden="true"></i>
						</div>
						<div className="Intro-description">Bravo, volumen de datos sencillo y en equilibrio diseñado para tí.
						</div>
						<button className="trigger" onClick={this.handleClick}>

							<svg width="100%" height="100%" viewBox="0 0 60 60" preserveAspectRatio="none">
								<g className="icon icon--grid">
									<rect x="32.5" y="5.5" width="22" height="22"/>
									<rect x="4.5" y="5.5" width="22" height="22"/>
									<rect x="32.5" y="33.5" width="22" height="22"/>
									<rect x="4.5" y="33.5" width="22" height="22"/>
								</g>
								<g className="icon icon--cross">
									<line x1="4.5" y1="55.5" x2="54.953" y2="5.046"/>
									<line x1="54.953" y1="55.5" x2="4.5" y2="5.047"/>
								</g>
							</svg>
							<span>View content</span>
						</button>
					</div>
				</div>			
				</div>
				{/* GRID SECTION TO BE DISPLAYED AFTER USER LOGGED IN */}	
				<section className="items-wrap">
					<nav>
						<Link to="/Person" className="item">Person</Link>
						<Link to="/Branch" className="item">Branch</Link>
					</nav>	
				</section>
			</div>	
		)
	}
}
