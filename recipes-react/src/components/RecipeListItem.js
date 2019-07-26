import React from 'react'
import { Link } from "react-router-dom";
import "./RecipeListItem.scss";


export default function RecipeListItem(props) {
	const { id, pic, name, supplier, details } = props;
	return (
		<div className="ListItem">
			<img src={pic} alt="food" />
			<h3>{name}</h3>
			<h4>`Provided by ${supplier}`</h4>
			<div className="btns">
				<Link to={`/recipes/${id}`} className="blue">Details</Link>
				<a href={details} target="_blank" rel="noopener noreferrer">
					Full Recipe
				</a>
			</div>
		</div>
	)
}
