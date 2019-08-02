import React from 'react'
import { Consumer } from "./contextObj";
//Styled-component
import styled from "styled-components";
//Routing
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<Consumer>
			{value => {
				const { linksTag , sideBar } = value;
				return <SideBarWrap show={sideBar}>
					<ul>
						{linksTag.map(item =>
							<li key={item.id}>
								<Link className="SideBarLink" to={item.path}>{item.text}</Link>
							</li>
						)}
					</ul>
				</SideBarWrap>
			}}	
		</Consumer>
	)
}


//STYLED
const SideBarWrap = styled.nav`
	position: fixed;
	top: 63px;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--mainGrey);
	z-index: 10;
	border-right: 3px solid var(--primaryColor);
	transition: var(--mainTransition);
	transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-100%)')};
	ul{
		list-style: none;
	}
	.SideBarLink{
			display: block;
			font-size: 1.5rem;
			text-transform: capitalize;
			color: var(--mainBlack);
			padding: .5rem 1.5rem;
			background: transparent;
			transition: var(--mainTransition);
			text-decoration: none;
		}
		.SideBarLink:hover{
				background: var(--primaryColor);
				color: var(--mainWhite);
				padding: .5rem 1.5rem .5rem 2.5rem;
		}
	/* //QUERIES  */
	@media (min-width: 576px){
		width: 20rem;
	}
`;