import React from 'react'
//Icons
import { FaBars, FaCartPlus } from "react-icons/fa";
//Logo
import Logo from "../images/logo.svg";
//Consumer
import {Consumer} from "./contextObj/context";

import SideBar from "./Sidebar";
import SideCart from "./Sidecart";
//styles
import styled from "styled-components";

export default function Nav() {
	return (
		<Consumer>
			{value => {
				console.log(value);
				const { cartItems, toogleSideBar, toogleCart } = value;
				return (
					<NavWrapper>
						<div className="NavCenter">
							<FaBars className="NavIcon" onClick={toogleSideBar} />
							<img className="NavImg" src={Logo} alt="Company" />
							<div className="NavCart">
								<FaCartPlus className="NavIcon" onClick={toogleCart} />
								<div className="NavCartItems">{cartItems.length}</div>
							</div>
						</div>	
					</NavWrapper>
				)
			}}
		</Consumer>
	)
}


//STYLES
const NavWrapper = styled.nav`
	/* NAV */
	position: sticky;
	top: 0;
	width:100%;
	padding: 1rem 1.5rem;
	background: var(--mainGrey);
	border-bottom: 3px solid var(--primaryColor);
	.NavCenter{
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1170px;
		margin: 0 auto;
	}
	/* ICONS */
	.NavIcon{
		font-size: 1.5rem;
		cursor: pointer;
	}
	/* CART SECTION */
	.NavCart{
		position: relative;
		.NavCartItems{
			position: absolute;
			top: -8px;
			left: 20px;
			padding: 0 5px;
			border-radius: 8px;
			z-index: 10;
			background: var(--primaryColor);
			color: var(--mainWhite);
			font-size: .8rem;
		}
	}
`;
