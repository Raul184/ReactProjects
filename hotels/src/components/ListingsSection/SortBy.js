import React from 'react'
import { FaList , FaBars} from "react-icons/fa";

export default function SortBy() {
	return (
		<section className="SortBy">
			<span>389 results found</span>
			<div className="SortOptions">
				<select name='sortby'>
					<option value='priceAsc'>From high to low prices</option>
					<option value='priceDsc'>From low to high prices</option>
				</select>	
				<div className="view">
					<FaList />
					<FaBars />
				</div>
			</div>
		</section>
	)
}
