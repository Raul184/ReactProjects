import React from 'react';
//components
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

import { Link } from "react-router-dom";
//styles
import "./Home.scss";


export default function Home() {
	return (
		<>
			<Hero>
				<Banner title="luxurious rooms" subtitle="deluxe rooms">
					<Link to='/rooms' className="btn-primary">Available Rooms</Link>
				</Banner>
			</Hero> 
			<Services />
			<FeaturedRooms />
		</>
	)
}
