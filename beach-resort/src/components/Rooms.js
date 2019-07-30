import React from 'react'
import RoomsFilter from "./RoomsFilter.js";
import RoomsList from "./RoomsList";
//Context API Hook for sample
import { RoomConsumer } from "../Context";
//Context API with Higher Order Component
// import { withRoomConsumer } from "../Context";
import OnLoading from "./OnLoading";
//Styles
import "./Rooms.scss";

//NORMAL USE OF A CONTEXT API IN A FUNCTIONAL COMPONENT
export default function Rooms() {
	return (
		<RoomConsumer>
			{value => {
				const { loading, sortedRooms, rooms } = value;
				if (loading) {
					return <OnLoading />
				} 
				return(
					<div className="Rooms">
						<RoomsFilter rooms={rooms}/>
						<RoomsList rooms={sortedRooms}/>
					</div>
				)
			}}
		</RoomConsumer>
	)
}

// function RoomContainer({ context }) {
// 	const { loading, sortedRooms, rooms } = context;
// 	if (loading) {
// 			return <OnLoading />
// 	} 
// 	return(
// 		<>
// 			<RoomsFilter rooms={rooms}/>
// 		 	<RoomsList rooms={sortedRooms}/>
// 		</>
// 	)
// }



// export default withRoomConsumer(RoomContainer);