import React from 'react'

export default function cartColumns() {
	return (
		<>
			<div className="container" style={style.container}>
				<div className="column">
					<p>Products</p>
				</div>
				<div className="column">
					<p>Name</p>
				</div>
				<div className="column">
					<p>Price</p>
				</div>
				<div className="column">
					<p>Quantity</p>
				</div>
				<div className="column">
					<p>Remove</p>
				</div>
				<div className="column">
					<p>TOTAL</p>
				</div>
			</div>
		</>
	)
}

const style = {
	container:{
		display: "grid",
		gridTemplateColumns: "repeat(6, 1fr)",
		justifyItems: "center"
	}
}