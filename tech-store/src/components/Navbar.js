import React from 'react'
//Icons
import { FaBars, FaCartPlus } from "react-icons/fa";
//Logo
import Logo from "../images/logo.svg";
//Consumer
import {Consumer} from "../components/contextObj/context";

import SideBar from "./Sidebar";
import SideCart from "./Sidecart";
//styles
import styled from "styled-components";

export default function Navbar() {
	return (
		<Consumer>
			{value => {
				const { cartItems, toogleSideBar, toogleCart } = value;
				return (
					<div className="NavBar">
						<FaBars onClick={toogleSideBar} />
						<img src={Logo} alt="Company" />
						<FaCartPlus onClick={toogleCart} />
					</div>
				)
			}}
		</Consumer>
	)
}
