import React, { Component } from 'react'
import temporary from "./tempDetails";
import { Link } from "react-router-dom";
import "./OneRecipe.scss";
export default class OneRecipe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: temporary,
			id: this.props.match.params.id,
			loading: false
		}
	}
	//LIVE-CICLE-METHODS
	async componentDidMount() {
		const url =
			`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY
			}&rId=${ this.state.id }`;
		try {
			const request = await fetch(url);
			const json = await request.json();
			console.log(json.recipe);
			//set
			this.setState({
				recipe: json.recipe
			})
		}
		catch (error) { console.log(error) }
	}
	render() {
		const { image_url, source_url,
			publisher, publisher_url, title} = this.state.recipe;
		
		return (
			<div className="OneRecipeGrid">
				<div className="can1">
					<Link className="linksOut" to="/recipes">Back to recipes list</Link>
					<img src={image_url} alt="recipe" style={{ maxHeight: "30rem" }}/>
				</div>
				<div className="can2">
					<h6>{title}</h6>
					<h6>Provided by {publisher}</h6>
					<a className="linksOut" href={publisher_url} target="_blank" rel="noopener noreferrer">
						Publisher Webpage
					</a>
					<a className="linksOut" href={source_url} target="_blank" rel="noopener noreferrer">
						Recipe Url
					</a>
					<ul>
						<h2>ingredients</h2>
						{this.state.recipe.ingredients.map((item, index) => {
							return (
								<li key={index}>{item}</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}
