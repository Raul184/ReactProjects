import React from 'react'
import styled from 'styled-components';

export default function Header() {
	return (
		<header className="Header">
			<div className="Header-Logo">Logo</div>
			<nav>
				<a href="www.jam.com">Create Ads</a>
				<a href="www.jam.com">About Us</a>
				<a href="www.jam.com">Log In</a>
				<a href="www.jam.com" className="Header-Btn">Register</a>
			</nav>
		</header>
	)
}


