import React from 'react'
import Title from "../Title";
//pic
import aboutImg from "../../images/aboutBcg.jpeg";
//styles
import styled from "styled-components";

export default function Info() {
	return (
		<InfoWrap>
			<div className="container">
				<div className="col6">
					<img
						src={aboutImg}
						className="InfoImg" alt="About section"
						style={{
							outline: "2px solid var(--darkGrey)",
							outlineOffset: "4px",
							border: "2px solid var(--darkGrey)",
							borderRadius: "15px"
						}}
					/>
				</div>
				<div className="col6">
					<Title title="About us" style={{ marginTop: "2rem" }}/>
					<p className="InfoP">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
					<p className="InfoP">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
					<button className="main-link"
						type="button"
						style={{ margin: "1rem 0" }}
					>
							More Info
					</button>
				</div>
			</div>
		</InfoWrap>
	)
}

const InfoWrap = styled.div`
	/* text-align: center; */
	.container{
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 1rem 0;
		.col6{
			width: 50%;
			display: inline-block;
			img{
				display: block;
				width: 70%;
				margin-left: 20%;
				margin-top: 5%;
			}
			p{
				margin: .8rem 0;
				text-align: left;
			}
		}
	}
`;