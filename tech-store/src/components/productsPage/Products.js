import React from 'react'
import { Consumer } from "../contextObj/context";
import Title from "../Title";
import Product from "../Product";

export default function Products() {
	return (
		<Consumer>
			{
				value => {
					const { filteredProducts }  = value;
					return (
						<section className="Products">
							<Title title="Our Products" center />
							<div className="ProductsFilered" style={style}>
								{filteredProducts.map(prod => {
									return <Product key={prod.id} product={prod}/>
								})}
							</div>
						</section>
					)}
			}
		</Consumer>
	)
}

//STYLES

const style = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "space-evenly",
	rowGap: "1em"
}