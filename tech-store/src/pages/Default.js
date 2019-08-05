import React from 'react';
import bcgImg from "../images/defaultBcg.jpeg";
import Hero from "../components/Hero";

export default function Default() {
	return (
		<Hero title="Sorry, product not found" img={bcgImg}></Hero>
	)
}
