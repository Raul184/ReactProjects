import React from 'react'
//Context Consumer for Functional Components
// import { Consumer } from "../components/contextObj/context";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
//img
import mainBcg from "../images/mainBcg.jpeg";
//Comp.
import Services from "../components/homepage/Services";
import FeaturedProducts from "../components/homepage/FeaturedProducts";

export default function HomePage() {
	return (
		<>
			<Hero title="Trending Gadgets" max={0} img={mainBcg}>
				<Link to="/product" className="main-link" style={{ margin: "2rem" }}>
					Our Products
				</Link>
			</Hero>
			<Services />
			<FeaturedProducts />
		</>
	)
}
