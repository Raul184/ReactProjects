import React from 'react'
//Context Consumer for Functional Components
// import { Consumer } from "../components/contextObj/context";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
//img
import mainBcg from "../images/mainBcg.jpeg";

export default function HomePage() {
	return (
		<>
			<Hero title="Trending Gadgets" max={false} img={mainBcg}>
				<Link to="/products" className="main-link" style={{ margin: "2rem" }}>
					Our Products
				</Link>
			</Hero>
		</>
	)
}
