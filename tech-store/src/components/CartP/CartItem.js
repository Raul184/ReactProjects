import React from 'react'


export default function CartItem({ cartItem }) {
	const { id, title, price, total, image } = cartItem;
	return (
		<div key={id} className="CartItem" style={style.container}>
			<div className="Column">
				<img src={image}  width="35" alt="product" style={{margin: "1rem"}}/>
			</div>
			<div className="Column" style={style.column}>{title}</div>
			<div className="Column"style={style.column}>{price}</div>
			<div className="Column" style={style.column}>{total}</div>
			<div className="Column" style={style.column}></div>
		</div>
	)
}


const style = {
	container:{
		display: "grid",
		gridTemplateColumns: "repeat(6, 1fr)",
		justifyItems: "center"
	},
	column: {
		padding: "1rem"
	}
}