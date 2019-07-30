import React from 'react';
//components
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
//style-components
import StyledHero from "../components/StyledHero"; 
import { Link } from "react-router-dom";
//styles
import "./Home.scss";


export default function Home() {
	return (
		<>
			<StyledHero>
				<Banner title="luxurious rooms" subtitle="deluxe rooms">
					<Link to='/rooms' className="btn-primary">Available Rooms</Link>
				</Banner>
			</StyledHero> 
			<Services />
			<FeaturedRooms />
		</>
	)
}
