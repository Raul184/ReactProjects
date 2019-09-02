import React from 'react'
import ListingItem from './ListingItem';

export default function ListingsTable() {
	return (
		<section className="ListingsTable" style={styles}>
			<ListingItem/>
		</section>
	)
}


const styles = {
	display: "grid",
	gridTemplateColumns: "repeat(3 , 1fr)"
}