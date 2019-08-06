import React from 'react'
import Title from "../Title";
//styles
import styled from "styled-components";

export default function Contact() {
	return (
		<FormulaioWrap>
			<Title title="Contact Us" center="center" style={{ margin: "1rem" }}/>
				<form className="ContactForm">
				{/* Name */}
					<input type="text" name="firstName" className="nameForm" placeholder="David" />
				{/* Email */}
					<input type="email" name="email" className="emailForm" placeholder="David@gmail.com" />
				{/* Subject */}
					<input type="text" name="subject" className="subjectForm" placeholder="import!" />
				{/* Message */}
					<textarea name="message" className="messageForm" rows="10" placeholder="hello Bro"></textarea>
				</form>
			<button type="button" className="main-link" style={{margin: "2rem" , width: "50%"}}>Send</button>
		</FormulaioWrap>
	)
}

const FormulaioWrap = styled.nav`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.ContactForm{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 50%;
			margin: 0 auto;
		}
		input,textarea{
			margin: 1rem;
			padding: .5rem;
			font-size: 1rem;
			border-radius: 10px;
		}
`;
