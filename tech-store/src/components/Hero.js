import React from 'react';
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

export default function Hero({img, title, max, children}) {
	return (
		<HeroWrap max={max} img={img}>
			<div className="banner">
				<h1 className="title">{title}</h1> 
				{children}
			</div>
		</HeroWrap>
	)
}

//Styled components
const HeroWrap = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: ${props => (props.max ? '100vh' : '60vh')};
	color: var(--mainWhite);
	background:url(${ props => props.img}) center/cover no-repeat, 
	linear-gradient(var(--primaryRGBA),var(--primaryRGBA));
	.title{
		padding-top: 2rem;
		font-size: 3.5rem;
		text-shadow: 4px 4px 2px rgba(150, 150, 150, 0.78);
		text-transform: uppercase;
		letter-spacing: var(--mainSpacing);
	}
`;


/* DEFAULT PROPS for Background Imgs */
Hero.defaultProps = {
	img: mainBcg
}