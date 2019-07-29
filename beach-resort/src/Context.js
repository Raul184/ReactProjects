import React, { Component } from 'react'
//Data
import Items from "./data";

//CONTEXT API TO PROVIDE ROOMS
// Tree Provider
const RoomContext = React.createContext();

//Provider
class RoomProvider extends Component {
	constructor() {
		super();
		this.state = {
			//all
			rooms: [],
			//filter
			sortedRooms: [],
			featuredRooms: [],
			//spinner 
			loading: true
		}
		this.getSelectedRoom = this.getSelectedRoom.bind(this);
	}
	//GET Data

	//REQUEST for External Data on CDMount
	componentDidMount() {
		//Get Data BEING Called
		//1. Sort data
		let formattedRooms = this.formatData(Items);
		//Filtering Featured Rooms
		let featuredRooms = formattedRooms.filter(room => room.featured);
		//2. Save it
		this.setState({
			rooms: this.state.rooms,
			featuredRooms,
			sortedRooms: formattedRooms,
			loading: false
		});
	}
	//Helpeer for Component Did Mount
	formatData(arr) {
		//format
		let allRooms = arr.map(item => {
			let id = item.sys.id;
			let pics = item.fields.images.map(image =>
				image.fields.file.url);
			let room = { ...item.fields, pics, id }
			return room;
		});
		return allRooms;
	}
	//ON SELECTED ROOM CLICKED , Display it and routing it
	getSelectedRoom(slug) {
		let allRooms = [...this.state.rooms];
		const selected = allRooms.find(room => room.slug === slug);
		return selected;
	}

	render() {
		return (
			<RoomContext.Provider
				value={{ ...this.state, getSelected: this.getSelectedRoom }}
			>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}


//Consumer
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };