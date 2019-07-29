import React from 'react'
import loadingGif from "../images/gif/loading-gear.gif";

export default function OnLoading() {
	const styles = {
		fontSize: "1.4rem",
		textAlign: "center",
		margin: "2rem 0"
	}
	return (
		<div className="OnLoading" style={styles}>
			<h4>loading...</h4>
			<img src={loadingGif} alt="loader pic"/>
		</div>
	)
}
