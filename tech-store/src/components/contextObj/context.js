//1. Context Object
import React, { Component } from 'react';
//Links components
import { linkTags } from "./linkTags";
//Social Media
import { socialData } from "./socialData";
//Keys ID
// import uuid from "uuid";
//Data
import { items } from "./productData";

const ProductContext = React.createContext();


// 1.2 Provider
export class Provider extends Component {
	constructor() {
		super();
		this.state = {
			sideBar: false,
			linksTag: linkTags,
			media: socialData,
			cartBar: false,
			cart: [],
			cartSubTotal: 0,
			cartTax: 0,
			storeProducts: [],
			filteredProducts: [],
			featuredProducts: [],
			onLoading: false,
			singleProduct: {}
		}
		this.toogleCart = this.toogleCart.bind(this);
		this.toogleSide = this.toogleSide.bind(this);
		this.addItemsToCart = this.addItemsToCart.bind(this);
		this.setProducts = this.setProducts.bind(this);
	}
	//UI
	// SIDEBAR ON TOOGLE
	toogleSide() {
		this.setState({
			sideBar: !this.state.sideBar
		});
	}

	// CART TOOGLE
	toogleCart() {
		this.setState({
			cartBar: !this.state.cartBar
		});
	}

	// 1.   On Load
	componentDidMount() {
		//get products from API
		// const Items = await Fetch(url)
		// Items = Items.json();
		this.setProducts(items);
	}
///////////////////////////////////////
//HELPERS FOR COMPONENT DID MOUNT
// 2.   Set Products from API
	setProducts(arr) {
		// Format ALL products DB
		let storedProducts = arr.map(item => {
			const id = item.sys.id;
			const image  = item.fields.image.fields.file.url;
	
			const product = { id, ...item.fields, image };
			return product;
		});
		// Featured Products
		let featured = storedProducts.filter(item => item.featured);
		this.setState({
			storeProducts: storedProducts,
			//is it necessary?
			filteredProducts: storedProducts,
			featuredProducts: featured,
			cartItems: this.getStorage(),
			singleProduct: this.getSPStorage(),
			onLoading: false
		});
	}
	//Local Storage for items on CART Store
	getStorage() {
		return [];
	}
	//
	getSPStorage() {
		return [];	
	}
// ADD PRODUCTS SECTION
///////////////////////////////////////
	
	//Handle ADD item
	addItemsToCart(id) {
		//Products in the cart
		let cartProducts = this.state.cart;
		//All products in the store
		let storeProducts = [...this.state.storeProducts];

		//Is it already in the Cart?
		let selected = cartProducts.find(prod => prod.id === id);
		//Add item
		if (!selected) {
			//Data from selected product
			selected = storeProducts.find(prod => prod.id === id);
			//cost
			let total = selected.price;
			//All in
			let selectedPriced = { ...selected, total, count: 1 }
			//Update Cart
			cartProducts = [...cartProducts, selectedPriced];
		}
		//Update item properties
		else {
			selected.count++;
			selected.total += selected.total;
			selected.total = parseFloat(selected.total.toFixed(2));
		}
		this.setState({
			cart: cartProducts,
			cartBar: true
		}, () => {
				this.addTotals();
				this.getStorage();
		})
	}
	//DISPLAY A product
	displayProduct(id) {
		console.log(id);
	}
	//Handle + Totals
	addTotals() {
		
	}
	//Contabilizar TOTals
	accountTotals() {
		
	}

///////////////////////////////////////
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					toogleSideBar: this.toogleSide,
					toogleCart: this.toogleCart,
					add: this.addItemsToCart,
					display: this.displayProduct
				}
			}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

// 1.2 Consumer
export const Consumer = ProductContext.Consumer;
