import React, { Component } from 'react'
//Context
import { Context } from "./contexts/ThemeContext";


export default class PageContent extends Component {
	static contextType = Context;

	render() {
		const { isDark } = this.context;

		const styles = {
			backgroundColor: isDark ? "black" : "white",
			height: "100vh",
			width: "100vw"
		}
		return (
			<div style={styles}>{this.props.children}</div>
		)
	}
}

