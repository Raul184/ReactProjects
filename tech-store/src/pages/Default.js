import React from 'react';
import bcgImg from "../images/defaultBcg.jpeg";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function Default() {
	return (
		<Hero title="404" img={bcgImg} max="true">
			<h2>page not found</h2>
			<Link to='/' className="main-link" style={{ marginTop: "2rem" }}>
				Return Home
			</Link>
		</Hero>
	)
}
