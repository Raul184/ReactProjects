import React, { Component } from 'react';
import RecipeListItem  from "./RecipeListItem";
import "./RecipeList.scss";

export default class RecipesList extends Component {
	render() {
		return (
			<>
				<h2>Recipe list</h2>
				<div className="List">
				{
					this.props.recipes.map(el => ( 
						<RecipeListItem
							key={el.recipe_id}
							id={el.recipe_id}
							pic={el.image_url}
							name={el.title}
							supplier={el.publisher}
							ingredients={el.f2f_url}
							details={el.source_url}
						/>
					))
				}
				</div>
			</>
		)
	}
}
