import React, { Component } from 'react';
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
	static defaultProps = {
		services: [
			{
				id: 1,
				icon: <FaDolly />,
				title: "30 days return policy",
				msg: "Lorem ipsum totalem Lorem ipsum totalem Lorem ipsum totalem lorenazo"
			},
			{
				id: 2,
				icon: <FaRedo />,
				title: "free Shipping",
				msg: "Lorem ipsum totalem Lorem ipsum totalem Lorem ipsum totalem lorenazo"
			},
			{
				id: 3,
				icon: <FaDollarSign />,
				title: "Secure Payments",
				msg: "Lorem ipsum totalem Lorem ipsum totalem Lorem ipsum totalem lorenazo"
			}
		]
	}
	render() {
		return (
			<ServicesWrap>
				{this.props.services.map(item => {
					return <div key={item.id}>
						<div className="servicesIcon">{item.icon}</div>
						<h2>{item.title}</h2>
						<p>{item.msg}</p>
					</div>
				})}
			</ServicesWrap>
		)
	}
}

const ServicesWrap = styled.section`
	display: grid;
	grid-template-columns: repeat(3 ,1fr);
	text-align: center;
	padding: .5rem 2rem;
	background: rgba(95 ,183, 234, .5);
	.servicesIcon{
		font-size: 2.5rem;
		color: var(--primaryColor);
		margin: 2rem;
	}
	p{
		color: var(--darkGrey);
		text-align: justify;
		padding: 1rem 2rem;
	}
`;