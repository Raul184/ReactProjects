//1. Context Object
import React, { Component } from 'react';

const ProductContext = React.createContext();


// 1.2 Provider
export class Provider extends Component {
	constructor() {
		super();
		this.state = {
			sideBar: false,
			cartBar: false,
			cartItems: []
		}
		this.toogleCart = this.toogleCart.bind(this);
		this.toogleSide = this.toogleSide.bind(this);
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
			cart: !this.state.cartBar
		});
	}

	render() {
		return (
			<ProductContext.Provider
				value={{
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
