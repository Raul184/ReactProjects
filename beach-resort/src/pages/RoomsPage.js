import React from 'react'
//styles defined comp.
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Rooms from "../components/Rooms";

export default function RoomsPage() {
	return (
		<>
			<StyledHero hero="roomsHero">
				<Banner title="our rooms">
					<Link to="/" className="btn-primary">
						Return home
					</Link>	
				</Banner>
			</StyledHero>
			<Rooms />
		</>
	)
}
