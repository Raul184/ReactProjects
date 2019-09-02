import React from 'react'

export default function Search() {
	return (
		<section className="Search">
			<input style={styles} type='text' name="Search" placeholder="Search" />
		</section>
	)
}


const styles ={
	background: "transparent",
	width: "70%",
	fontSize: "2rem",
	marginBottom: "1rem",
	padding: "1rem",
	border: "none",
	borderBottom: "2px solid lightgray"
}