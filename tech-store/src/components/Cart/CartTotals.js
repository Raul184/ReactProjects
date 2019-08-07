import React from 'react';
import { Consumer } from "../contextObj/";

export default function CartTotals() {
	return (
		<div className="CartTotals">
			<Consumer>
				{value => {
					const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
					return <div className="Clear">
						<button
							className="main-link"
							onClick={() => clearCart}
							style={{ margin: "2rem" }}
						>
							Clear Total
						</button>
						<h3>Subtotal: ${cartSubTotal}</h3>
						<h3>Taxes: ${cartTax}</h3>
						<h3>Total: ${cartTotal}</h3>
					</div>
				}}
			</Consumer>
		</div>
	)
}
