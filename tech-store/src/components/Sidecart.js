import React from 'react'
import { Consumer } from "./contextObj";
import styled from "styled-components";
//Icons
import { FaEraser } from "react-icons/fa";

export default function Sidecart() {
	return (
		<Consumer>
			{value => {
				const { cartBar , cart } = value;
				return <CartWrap show={cartBar}>
					<ul>
						{cart.map(item => (
							<li key={item.id}>
								<p>{item.title} <FaEraser /></p>
								<p>Total:{item.total}$ units:{item.count}</p>
							</li>
						))}
					</ul>
				</CartWrap>
			}}	
		</Consumer>
	)
}

const CartWrap = styled.nav`
	position: fixed;
	top: 42px;
	right: 0;
	width: 100%;
	height: auto;
	display: ${props => (props.show ? 'block' : 'none')};
	padding: .5em;
	background: var(--mainGrey);
	border: 3px solid var(--primaryColor);
	border-radius: 15px;
	/* border-bottom: 3px solid var(--primaryColor); */
	transition: all .8s ease-in-out;
	z-index: 20;
	ul{
		list-style: none;
		li{
			text-transform: capitalize;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			border-bottom: 1px solid var(--primaryColor);
		}
	}
	@media (min-width: 576px){
		width: 18rem;
		margin-right: 1em;
		transition: all .8s ease-in-out;
	}
`;
