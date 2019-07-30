import React from 'react';
import Room from "./Room";
//Styles
import "./RoomsList.scss";

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
			<div className="roomList-center">
				{
					rooms.map(room => {
						return <Room key={room.id} room={room} />
					})
				}
			</div>
		</section>
	)
}
