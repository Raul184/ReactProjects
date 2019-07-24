import React ,{Component} from 'react'
import "./Tour.scss";


export default class Tour extends Component {
	constructor() {
		super()
		this.state = {
			showInfo : false
		}
		this.handleToogle = this.handleToogle.bind(this);
	}
	//TooGle on Description
	handleToogle() {
		this.setState({
			showInfo: !this.state.showInfo
		})
	}
	render(){
		const { id, image, name, tour, desc, remove } = this.props;
		return (
			<div className="Tour">
				<div className="Tour-image">
					<img src={image} alt="City" />
					<i className="fas fa-window-close"
						onClick={() => remove(id)}
					/>
				</div>
				<div className="Tour-info">
					<h3>{name}</h3>
					<h4>{tour}</h4>
					<h5>Info
						<span>
							<i className="fas fa-caret-square-down"
								onClick={this.handleToogle}
							/>
						</span>
					</h5>
					{this.state.showInfo ? <p className="Tour-desc">{desc}</p> : null}
					
				</div>
			</div>
		)
	}
}
