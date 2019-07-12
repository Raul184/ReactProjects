import React, { Component } from 'react'

export const LanguageContext = React.createContext();

export class LanguageProvider extends Component {
	constructor(props){
		super(props);
		this.state = { language: "french" };
		this.changeLanguage = this.changeLanguage.bind(this);
	}
	//Language changer
	changeLanguage(e) {
		this.setState({
			language: e.target.value 
		}) 
	}
	render() {
		return (
			<LanguageContext.Provider value={{ ...this.state, setLanguage: this.changeLanguage }}>
				{this.props.children}
			</LanguageContext.Provider>
		)
	}
}

export const withLanguageContext = Component => props => (
	<LanguageContext.Consumer>
		{value => <Component languageContext={value} {...props} />}
	</LanguageContext.Consumer>
)