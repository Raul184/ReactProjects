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

	//GET Type of Rooms Unique Values
	let types = unique(rooms, 'type');
	types = ['all', ...types];
	types = types.map(item => <option key={uuid()} value={item}>{item}</option>)
	
	//GET Capacity for Rooms
	let people = unique(rooms, 'capacity');
	people = people.map(num =>
		<option key={uuid()} value={num}>{num}</option>
	)
	return (
		<section className="FilterContainer">
			<Title title="Search Rooms" />
			<form className="FilterForm">
				{/* ROOM TYPE Input */}
				<div className="FormGroup">
					<label htmlFor="type">Room Type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="FormControl"
						onChange={handleChange}
					>
						{types}	
					</select>
				{/* GUESTS NUMBER Input */}
					<label htmlFor="capacity">Guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="FormControl"
						onChange={handleChange}
					>
						{people}	
					</select>
					{/* ROOM PRICES */}
					<label htmlFor="price">Room Price ${price}</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="FormControl"
					>	
					</input>
					{/* SIZES */}
					<label htmlFor="size">Room Size</label>
					{/* MIN */}
					<input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
					{/* MAX */}
					<input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
					{/* EXTRAS */}
					<div className="singleExtra">
						<input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
						<label htmlFor="breakfast">Breakfast</label>
					</div>
					<div className="singleExtra">
						<input type="checkbox" name="pets" id="pets" checked={breakfast} onChange={handleChange} />
						<label htmlFor="pets">Pets</label>
					</div>
				</div>
			</form>
		</section>
	)
}
