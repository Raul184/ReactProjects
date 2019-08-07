import React from 'react'
import Item from "./CartItem";
import { Consumer } from "../contextObj/context";

export default function CartList() {
	return (
		<div className="CartList">
			<Consumer>
				{value => {
					const { cart } = value;
					if (cart.length === 0){
					return (
						<h1>Cart is empty</h1> 
						)
					}
					return <>
						{
							cart.map(item => (
								<Item key={item.id} cartItem={item} />
							))
						}	
					</>
				}}
			</Consumer>
		</div>
	)
}
