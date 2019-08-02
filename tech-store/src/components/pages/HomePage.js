import React from 'react'
import { FaHome } from "react-icons/fa";
//Context Consumer for Functional Components
import { Consumer } from "../contextObj/context";

export default function HomePage() {
	return (
		<Consumer>
			{value => {
				console.log(value);
				return <h1>COme panes<FaHome/></h1>
			}}
		</Consumer>
	)
}
