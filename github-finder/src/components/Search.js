import React, { Component } from 'react'
import PropTypes from "prop-types";
import Alert from "./Alert";

export default class Search extends Component {
	state = {
		search: '',
		alert: false
	}
	//Props TYPES 
	static propTypes = {
		searchUser: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired,
		display: PropTypes.bool.isRequired
	}
	//OnChange
	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	//OnSubmit
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.search !== "") {
			this.props.searchUser(this.state.search);
			this.setState({
				search: ''
			})
		} else {
			this.setState({
				alert: true
			})
			setTimeout(()=> this.setState({ alert: false }), 1200);
		}
	}

	//OnClick
	handleClick = () => {
		this.props.clear();
	}

	render() {
		const { display } = this.props;
		return (
			<div className="Search">
				<form className="form" onSubmit={this.handleSubmit}>
					{
						this.state.alert ?
							<Alert type='danger' msg="Please, input an username" /> :
							null
					}
					<input type="text"
						name="search"
						placeholder="Search users.."
						value={this.state.search}
						onChange={this.handleChange}
					/>
					<input type="submit" className="btn btn-block btn-dark" value="Search" />
				</form>
				{
					display && <button className="btn btn-block btn-light"onClick={this.handleClick}> Clear
					</button>
				}
			</div>
		)
	}
}
