import React from 'react'
import { Consumer } from "../contextObj/context";
import Title from "../Title";
import Product from "../Product";
import Filter from "./Filter";

export default function Products() {
	return (
		<Consumer>
			{
				value => {
					const { filteredProducts, handleChange }  = value;
					return (
						<section className="Products">
							<Title title="Our Products" center />
							<Filter e={handleChange} />
								{filteredProducts.length === 0 ?
								(<h3>Sorry , no items match your search</h3>)
								:
								(<div className="ProductsFilered" style={style}>
									{filteredProducts.map(prod =>
									{
										return <Product key={prod.id} product={prod}/>
									})}
								</div>
								)}
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