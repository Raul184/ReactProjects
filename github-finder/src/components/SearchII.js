import React , {useState} from 'react'
import PropTypes from "prop-types";
import Alert from "./Alert";

export default function SearchII({searchUser , clear , display}) {
	//text for State
	const [text, setText] = useState('');
	//alert Bool
	const [alert, setAlert] = useState(false);

	//On Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text !== null) {
			//find user
			searchUser(text);
			//clean state
			setText(' ');
		} else {
			setAlert(true);
			//remove notification after 1.2s
			setTimeout(()=> setAlert(false), 1200);
		}
	}

	//On click
	const handleClick = () => {
		clear();
	}

	//On Change
	const handleChange = (e) => {
		setText(e.target.value)
	}
	return (
		<div className="Search">
				<form className="form" onSubmit={handleSubmit}>
					{
						alert ?
							<Alert type='danger' msg="Please, input an username" /> :
							null
					}
					<input type="text"
						name="search"
						placeholder="Search users.."
						value={text}
						onChange={handleChange}
					/>
					<input type="submit" className="btn btn-block btn-dark" value="Search" />
				</form>
				{
				display && <button
					className="btn btn-block btn-light"
					onClick={handleClick}> Clear
					</button>
				}
		</div>
	)
}



//PROP Types
SearchII.propTypes = {
	searchUser: PropTypes.func.isRequired,
	clear: PropTypes.func.isRequired,
	display: PropTypes.bool.isRequired
}