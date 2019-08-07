import React from 'react'
import Title from "../Title";
import CartColumns from "./cartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotals";

export default function Cart() {
	return (
		<section className="Cart">
			<div className="CartTitle">
				<Title title="Cart items" center />
			</div>
			<CartColumns  />
			<CartList />
			<CartTotal/>
		</section>
	)
}
