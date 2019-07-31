import React, { Component } from 'react'
//Consumer Component
import { RoomContext } from "../Context";
import OnLoading from "./OnLoading";
import Room from "./Room";
import Title from "./Title";

//STYLES
const styles = {
	FeatureRoomsDisplayed: {
		display: "grid",
		gridTemplateColumns: "repeat(3 ,1fr)",
		justifyItems: "center"
	}
}	
export default class FeaturedRooms extends Component {
	static contextType = RoomContext;
	render() {
		const {featuredRooms, loading} = this.context;
		
		const featured = featuredRooms.map(room => (
			<Room key={room.id} room={room} />
			)
		)
		return (
			<>
				<Title title="Featured Rooms" />
				<section className="FeaturedRooms">
					<div
						className="FeatureRoomsDisplayed"
						style={styles.FeatureRoomsDisplayed}
					>
					{loading ? <OnLoading /> : featured}
					</div>
				</section>
			</>
		)
	}
}
