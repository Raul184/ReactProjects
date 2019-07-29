import React from 'react'

export default function Title({ title }) {
	const style = {
		padding: "2rem",
		textAlign: "center"
	}
	const titleStyles = {
		fontSize: "2.4rem",
		color: "#b7ab99",
		textShadow: "black 4px 3px 5px",
		textTransform: "capitalize",
		letterSpacing: ".1em",
		marginBottom: ".8em"
	}
	const underLine = {
		width: "6rem",
		height: "2px",
		margin: "0 auto",
		background: "rgb(175, 154, 125)"
	}
	return (
		<div className="Title" style={style}>
			<h4 style={titleStyles}>{title}</h4>
			<div style={underLine} /> 
		</div>
	)
}
