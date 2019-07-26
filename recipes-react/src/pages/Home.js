import React, { Component } from 'react';
//reuse
import Header from "../components/Header";


export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Header title="Amazing Recipes" />
			</div>
		)
	}
}
