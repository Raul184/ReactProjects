import React from 'react';
import Room from "./Room";
//STYLES
const styles = {
	roomListCenter:{
		width: "80vw",
		padding: "5rem 0",
		margin: "0 auto",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
		gridRowGap: "2rem",
		gridColumnGap: "35px"
	}
}

export default function RoomsList({ rooms }) {
	if (rooms.length === 0) {
		return (
			<div className="Empty-search">
				<h3>Unfortunately, no rooms match your search</h3>
			</div>
		)
	}
	return (
		<section className="roomList">
			<div className="roomListCenter" style={styles.roomListCenter}>
				{
					rooms.map(room => {
						return <Room key={room.id} room={room} />
					})
				}
			</div>
		</section>
	)
}
