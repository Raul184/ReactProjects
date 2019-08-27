import React from 'react'

export default function Hero({title}) {
	return (
		<div className="Error" style={styles}>
			<h3>{title}</h3>
		</div>
	)
}

const styles = {
	textAlign: "center",
	fontSize: "3rem"
}