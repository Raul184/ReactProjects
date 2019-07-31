import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../Context";
//title comp.
import Title from "./Title";
//Helper
import unique from "./helpers/SelectFormUnique";
//keys
import uuid from "uuid";

export default function RoomsFilter({rooms}) {

	//Consuming from Context
	const context = useContext(RoomContext);
	const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
	console.log(context);

	//GET Type Unique Values
	let types = unique(rooms, 'type');
	types = ['all', ...types];
	//DOM
	types = types.map(item => <option key={uuid()} value={item}>{item}</option>)
	
	return (
		<section className="FilterContainer">
			<Title title="Search Rooms" />
			<form className="FilterForm">
				{/* type selector */}
				<div className="FormGroup">
					<label htmlFor="type">Room Type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="FormSelect"
						onChange={handleChange}
					>
						{types}	
					</select>
				</div>
			</form>
		</section>
	)
}
