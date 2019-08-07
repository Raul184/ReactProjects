import React from 'react'
import { Consumer } from "../components/contextObj/context";
import styled from "styled-components";
import Title from '../components/Title';
// import { Link } from "react-router-dom";
export default function OneProductPage() {
	return (
		<Consumer>
			{value => {
				const { singleProduct, onLoading } = value;
				if (onLoading) {
					return <h1>...loading</h1>
				}
				return <OneProductWrap>
					<Title title={singleProduct.title}/>
					<p>{singleProduct.description}</p>
					<img src={singleProduct.image} alt="product" />
				</OneProductWrap>
			}}
		</Consumer>
	)
}

// console.log(singleProduct.company , description , id , image and Title.);

const OneProductWrap = styled.div`
	h1{
		display: block;
		text-align: center;
		margin: 5rem;
	}`