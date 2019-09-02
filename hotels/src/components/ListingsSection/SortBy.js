import React from 'react'
import { FaList , FaBars} from "react-icons/fa";

export default function SortBy() {
	return (
		<section className="SortBy" style={styles}>
			<span style={styles.result}>389 results found</span>
			<div className="SortOptions" style={styles.options}>
				<select name='sortby'style={styles.select}>
					<option value='priceAsc'>From high to low prices</option>
					<option value='priceDsc'>From low to high prices</option>
				</select>	
				<div className="view" style={styles.view}>
					<FaList style={styles.icon}/>
					<FaBars style={styles.icon}/>
				</div>
			</div>
		</section>
	)
}

const styles={
	marginBottom: "1rem", 
	result:{
		fontSize: ".8rem",
		color: "lightgray",
		fontWeight: "600"
	},
	options:{
		float: 'right',
		display: 'flex',
		alignItems: "center"
	},
	select:{
		fontSize: ".8rem",
		color: "lightgray",
		background: "transparent",
		border: "1px solid darkgray",
		padding: '.5rem'
	},
	view:{
		display: "flex"
	},
	icon:{
		fontSize: "1.5rem" ,
		padding: ".5rem"
	}
}