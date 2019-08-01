import React, { Component } from 'react'
//Data
import Items from "./data";
// import Room from './components/Room';

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////  CONTEXT API IN A CLASS COMPONENT  ///////////////////////////////////////////////////////////////////////////////////////////
//CONTEXT API TO PROVIDE ROOMS
// Tree Provider
const RoomContext = React.createContext();

//Provider
class RoomProvider extends Component {
	constructor() {
		super();
		this.state = {
			//all NEED TO CHECK THIS LAST ONE
			rooms: [],
			//filter
			sortedRooms: [],
			featuredRooms: [],
			//spinner 
			loading: true,
			type: '',
			capacity: 1,
			price: 0,
			minPrice: 0,
			maxPrice: 0,
			minSize: 0,
			maxSize: 0,
			breakfast: false,
			pets: false
		}
		this.getSelectedRoom = this.getSelectedRoom.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	//GET Data

	//REQUEST for External Data on CDMount
	componentDidMount() {
		//Get Data BEING Called
		//1. Sort data
		let formattedRooms = this.formatData(Items);
		//Filtering Featured Rooms
		let featuredRooms = formattedRooms.filter(room => room.featured);
		//Max. Prices
		let maxPrice = Math.max(...formattedRooms.map(item => item.price));
		//Max. Size
		let maxSize = Math.max(...formattedRooms.map(item => item.size));
		//2. Save it
		this.setState({
			rooms: formattedRooms,
			featuredRooms,
			sortedRooms: formattedRooms,
			loading: false,
			price: maxPrice,
			maxPrice,
			maxSize,
			breakfast: this.state.breakfast,
			pets: this.state.pets
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
		let allRooms = this.state.sortedRooms;
		console.log(allRooms);
		const selected = allRooms.find(room => room.slug === slug);
		return selected;
	}

	//ON CHANGE
	handleChange(e) {
		const target = e.target;
		//Grab control inputs value
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = e.target.name;
		//Set values in State
		this.setState({
			[name]: value
		},
			this.filterRooms
		);
	}

	//After ON Change >> filer
	filterRooms() {
		let {
			rooms, type, capacity, price,
			minSize, maxSize, breakfast, pets } = this.state;
		let tempRooms = [...rooms];
		//str to number
		capacity = parseInt(capacity);
		price = parseInt(price);
		//FILTERS 
		//FOR TYPE OF ROOM
		if (type !== "all") {
			tempRooms = tempRooms.filter( room => room.type === type)
		}
		//CAPACITY
		if (capacity !== 1) {
			tempRooms = tempRooms.filter( room => room.capacity >= capacity)
		}
		//PRICE
		tempRooms = tempRooms.filter(room => room.price <= price)
		
		//SIZE
		tempRooms = tempRooms.filter(
			room => room.size >= minSize && room.size <= maxSize
		)

		//Breakfast
		if (breakfast) {
			tempRooms = tempRooms.filter(room => room.breakfast)
		}

		//Pets
		if (pets) {
			tempRooms = tempRooms.filter(room => room.pets)
		}
		
		this.setState({
			sortedRooms: tempRooms 
		});
	}
	render() {
		return (
			<RoomContext.Provider
				value={{
					...this.state,
					getSelected: this.getSelectedRoom,
					handleChange: this.handleChange
				}}
			>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}

//Consumer for FUNCTIONAL COMPONENTS
const RoomConsumer = RoomContext.Consumer;

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////  CONTEXT API IN A FUNCTIONAL COMPONENT  //////////////////////////////////////////////////////////////////////////////////////

// function withRoomConsumer(Component){
// 	return function wrappedConsumer(props){
// 		return <Room.Consumer>
// 			{value => < Component {...props} context={value}/>}
// 			</Room.Consumer>
// 	}
// }

// withRoomConsumer
export { RoomProvider, RoomContext, RoomConsumer  };