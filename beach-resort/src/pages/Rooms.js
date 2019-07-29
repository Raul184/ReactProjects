import React from 'react'
//styles defined comp.
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";


export default function Rooms() {
	return (
		<Hero hero="roomsHero">
			<Banner title="our rooms">
				<Link to="/" className="btn-primary">
					Return home
				</Link>	
			</Banner>
		</Hero>
	)
}
