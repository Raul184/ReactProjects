//1. Context Object
import React, { Component } from 'react';
//Links components
import { linkTags } from "./linkTags";
//Keys ID
import uuid from "uuid";

const ProductContext = React.createContext();


// 1.2 Provider
export class Provider extends Component {
	constructor() {
		super();
		this.state = {
			sideBar: false,
			cartBar: true,
			cartItems: [{item: "example" , id: uuid()}],
			linksTag: linkTags
		}
		this.toogleCart = this.toogleCart.bind(this);
		this.toogleSide = this.toogleSide.bind(this);
		this.cartItemsAdded = this.cartItemsAdded.bind(this);
	}
	//SIDEBAR ON TOOGLE
	toogleSide() {
		this.setState({
			sideBar: !this.state.sideBar
		});
	}

	//CART TOOGLE
	toogleCart() {
		this.setState({
			cartBar: !this.state.cartBar
		});
	}

	//Handle CartItemsAdded
	cartItemsAdded(nueItem) {
		let sorted = this.state.cartItems;
		sorted = [...sorted, { item: nueItem, id: uuid() }]
		this.setState({
			cartItems: sorted
		});
	}
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					toogleSideBar: this.toogleSide,
					toogleCart: this.toogleCart
				}
			}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

// 1.2 Consumer
export const Consumer = ProductContext.Consumer;
