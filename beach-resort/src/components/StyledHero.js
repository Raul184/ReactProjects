import styled from 'styled-components';
import defaultImg from "../images/room-1.jpeg";


const styledH = styled.header`
	min-height: 60vh;
	background: url(${props => props.img? props.img : defaultImg}) center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default styledH;