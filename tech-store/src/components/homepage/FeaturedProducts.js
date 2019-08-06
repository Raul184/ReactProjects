import React from 'react'
import Product from "../Product";
import { Link } from "react-router-dom";
import styled from "styled-components";
//Context
import { Consumer } from "../contextObj/context";
//Title comp.
import Title from "../Title";

export default function FeaturedProducts() {
	return (

		<section className="FeaturedProducts" style={{textAlign: "center"}}>
			<Title title="Featured Products" center={1} style={{ margin: "2rem" }}/>
			<FeaturedWrap>
				<div className="productsSection">
					<Consumer>
						{value => {
							const { featuredProducts } = value;
							return featuredProducts.map(prod => (
								<Product key={prod.id.id} product={prod} />
							));
						}}
					</Consumer>
				</div>
			</FeaturedWrap>
			<Link to="/products" className="main-link" style={{margin: "2rem"}}>Our Products</Link>
		</section>
	)
}

const FeaturedWrap = styled.div`
	.productsSection{
		width: 85%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3 , 1fr);
		grid-column-gap: 1.5rem;
		justify-content: center;
		justify-items: center;
		align-items: center;
		/* CARD CONTAINER for PRODUCT*/
	}
`;