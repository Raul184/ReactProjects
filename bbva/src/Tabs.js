import React, { Component } from 'react'
import "./styles/Tabs.css";

export default class Tabs extends Component {
	//FIRST
	componentDidMount() {
		
	}
	render() {
		return (
			<div className="Tabs">
				{/* React children helper */}
				{React.Children.map(this.props.children, (child, i) => {
					let classNome = "Tabs__tab";
					if (child.key === this.props.active) {
						classNome = `${ classNome } Tabs_Tab--active`;
					}
					return (
						<div
							className={classNome}
							onClick={() => {
								this.props.onChange(child.key)
							}}
						>
							{child}
						</div>
					);
				})}
				<div className="Tabs__Underline">
				</div>
			</div>
		)
	}
}
