import React from 'react'
//icons
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Consumer } from "./contextObj/context";
import styled from "styled-components";

export default function Product(props) {
	const { image, price ,title ,id} = props.product;
	// const id  = props.product.iid;
	return (
		<Consumer>
			{value => {
				const { add, display } = value;
				return (
					<ProductWrapper>
						<div className="Product">
							<div className="ProductImg">
								<img src={image} alt="product" />
								<div className="ProductIcons">
									<Link to={`/products/${id}`}>
										<FaSearch className="Icons" onClick={() => display(id)}/>
									</Link>
									<FaCartPlus className="Icons" onClick={() => add(id)}/>
								</div>
							</div>
							<div className="ProductText">
								<p>{title}</p>
								<p>{price}$</p>
							</div>
						</div>
					</ProductWrapper>
				)
			}}
		</Consumer>
	)
}

const ProductWrapper = styled.div`
	.Product{
			width: 30vw;
			height: 100%;
			text-align: center;
			border: 1px solid var(--darkGrey);
			border-radius: 5px;
			box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.35);
			transition: var(--mainTransition);
			/* Container for IMG */
			.ProductImg{
				position: relative;
				img{
				display: block;
				margin: 1rem auto;
				height: 30vh;
				transition: var(--mainTransition);
				}
				/* Container for ICONS  */
				.ProductIcons{
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50% , -50%);
					opacity: 0;
					transition: var(--mainTransition);
					.Icons{
						font-size: 2rem;
						padding: .5rem;
						margin: .5rem;
						color: var(--primaryColor);	
						background: var(--mainBlack);
						border-radius: 7px;
						transition: var(--mainTransition);
					}
				}
			}
			p{
				padding: 1rem;
			}
			.ProductText{
				display: flex;
				justify-content: center;
			}
	}
	/* HOVER */
	.Product:hover{
		box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
	}
	.Product:hover .ProductIcons{
		opacity:1;
		cursor: pointer;
	}
	.Product:hover .ProductImg img{
		opacity: .2;
		transform: scale(1.15);
	}
`;