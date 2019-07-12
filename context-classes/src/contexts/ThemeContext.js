import React, { Component } from 'react'

//Context
export const Context = React.createContext();

export class Provider extends Component {
	constructor(props){
	super(props);
	this.state = {
		isDark: true
		} 
		this.handleSwitch = this.handleSwitch.bind(this);	
	}

	handleSwitch() {
		this.setState({
			isDark: !this.state.isDark
		})
	}
	render() {
		return (
			<Context.Provider
				value={{ ...this.state, handleSwitch: this.handleSwitch }}
			>
				{this.props.children}
			</Context.Provider>
		)
	}
}
