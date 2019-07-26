import React, { Component } from 'react'
import "./Search.scss";

export default class Search extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { search, handleChange, handleSubmit } = this.props;
		return (
			<div className="Search">
				<h1>
					Search Recipes With
					<span style={{ color: "rgb(243, 102, 64)" }}> Food2Fork</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="search"
						placeholder="Search for your recipe"
						value={search}
						onChange={handleChange}
					/>
					<button type="submit"><i className="fas fa-search"></i></button>
				</form>
			</div>
		)
	}
}
