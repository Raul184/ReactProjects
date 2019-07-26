import React, { Component } from 'react'
import Search from "../components/Search";
import RecipesList from "../components/RecipesList";
//api
// import Api from '../components/Api';
// import axios from "axios";

export default class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [],
			search: "",
			url: `https://www.food2fork.com/api/search?key=4e90fbbc5eda059662e35254ffec4bbf&q=`
		}
		this.SearchRecipes = this.SearchRecipes.bind(this);
		this.Api = this.Api.bind(this);
	}
	//Recipes Getter
	async Api() {
			try {
				let result = await fetch(this.state.url);
				let jsonized = await result.json();
				jsonized.recipes.length === 0 ? this.setState({
					error: "Sorry but we could not find your recipe"
				}) 
				:  
				this.setState({
					recipes: jsonized.recipes,
					error: ""
				})
			}
			catch (error)
			{
				alert(error);
			}
	}
	
	componentDidMount() {
		this.Api();
	}

	SubmitRecipe = (e) => {
		e.preventDefault();
		const { url, search } = this.state;
		this.setState({
			url: `${ url }${ search }`,
			search: ""
		}, () => this.Api()
		)
	}
	
	//Search Functionality
	SearchRecipes(e) {
		this.setState({
			search: e.target.value
		});
		console.log();
	}
		
	render() {
		
		return (
			<>
				<Search
					search={this.state.search}
					handleChange={this.SearchRecipes}
					handleSubmit={this.SubmitRecipe}
				/>
				{this.state.error ? (
					<h2 style={{ fontSize: "3em", color: "Orange" }}>
						{this.state.error}
					</h2>)
				:
				<RecipesList recipes={this.state.recipes} />
				}
			</>
		)
	}
}
