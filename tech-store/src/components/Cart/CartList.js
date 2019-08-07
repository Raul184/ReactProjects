import React from 'react'
import Item from "./CartItem";
import { Consumer } from "../contextObj";

export default function CartList() {
	return (
		<div>
			<Consumer>
				
			</Consumer>
			<Item />			
		</div>
	)
}
