import React from 'react'
import "./styles/Units.css";


export default function Units(props) {
	const style = {
		Units: {
			width: "24vw",
			height: "10vh",
			background: "##38A4AF",
			border: "4px solid white",
			borderRadius: "47px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "20px",
			color: "white",
			textDecoration: "none",	
		}
	}

	return (
		<div className="Units" style={style.Units}>	
			<h3 style={{ textAlign: "center" }}>{props.name}</h3>
		</div>
	)
}
