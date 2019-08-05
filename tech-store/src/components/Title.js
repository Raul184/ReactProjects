import React from 'react'
import styled from "styled-components";

export default function Title({title, center}) {
	return (
		<TitleWrap center={center}>
			<h2 className="text-title">{title}</h2>
			<div className="title-underline" />
		</TitleWrap>
	)
}

const TitleWrap = styled.div`
	text-align: ${props => (props.center ? "center" : "left")};
	padding: 1rem;
	.text-title{
		margin-top: 2rem;
	}
	.title-underline{
		height: .25rem;
		width: 7rem;
		background: var(--primaryColor);
		margin:${props => (props.center? "0 auto": '0')}
	}

`;

