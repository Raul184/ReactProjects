import React from 'react';
import { Consumer } from "../components/contextObj/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<Consumer>{
			value => (
				<Wrap>
					<div className="Footer">
						<div className="footer6">
							<p>Copyright &copy; tech store {new Date().getFullYear()} all rights reserved</p>
						</div>
						<div className="footer12">
							{value.media.map(icon =>
								<Link key={icon.id} to={icon.url}>{icon.icon}</Link>)}
						</div>
					</div>
				</Wrap>
			)
		}</Consumer>
	)
}

const Wrap = styled.footer`
	.Footer{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--darkGrey);
	}
	p{
		padding: 1rem;
		color: var(--mainWhite);
	}
	.footer12{
		display: flex;
		justify-content: space-around;
		width: 50%;
		a{
			color: var(--mainWhite);
		}
		a:hover{
			color: var(--primaryColor);
		}
	}
`;