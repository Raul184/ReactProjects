import React from 'react'
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero";
//pic
import contactImg from "../images/contactBcg.jpeg";

export default function ContactPage() {
	return (
		<>
			<Hero img={contactImg}/>
			<Contact />
		</>
	)
}
