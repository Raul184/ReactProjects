import React from 'react'
import Info from "../components/About/Info";
import Hero from "../components/Hero";
//pic
import aboutImg from "../images/aboutBcg.jpeg";

export default function AboutPage() {
	return (
		<>
			<Hero img={aboutImg}>
			</Hero>
			<Info/>
		</>
	)
}
