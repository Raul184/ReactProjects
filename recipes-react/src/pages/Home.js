import React, { Component } from 'react';
// import "./Home.scss";
//reuse
import Header from "../components/Header";
// import { Link } from "react-router-dom";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Header title="Amazing Recipes" />
			</div>
		)
	}
}
