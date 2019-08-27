import React from 'react'

export default function Hero({title}) {
	return (
		<>
			<h3 style={styles}>{title}</h3>
		</>
	)
}

const styles = {
	textAlign: "center",
	fontSize: "3rem"
}