import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// pink -> #FF718E
//grey -> FAF7F5
//darkGrey -> #ADA8AA
// offwhite -> FFFEFF
//darkPurple -> #0C002B
export default function Header() {
	return (
		<Wrap>
			<header className="Header">
				<div className="Header-Logo">Logo</div>
				<nav>
					<NavLink activeClassName="active" to="/createAds">Create Ads</NavLink>
					<NavLink activeClassName="active" to="/AboutUs">About Us</NavLink>
					<NavLink activeClassName="active" to="/LogIn">Log In</NavLink>
					<NavLink activeClassName="active" to="/Register">Register</NavLink>
				</nav>
			</header>
		</Wrap>
	)
}

//Overall styles
const Wrap = styled.header`
	.Header{
		background: #0C002B;
		color: white;
		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.Header-Logo{

	}
	nav{
		a{
			font-size: 1rem;
			text-decoration: none;
			color: white;
			padding: 10px 15px;
		}
		.active{
  		background: #FF718E;
			padding: 10px 20px;
			text-align: center;
			color: white;
			border-radius: 5px;
			transition: all .3s ease-out;
		}
	}
`;
