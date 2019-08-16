import React , {useState , useContext} from 'react'
import PropTypes from "prop-types";
import Alert from "./Alert";
import GithubContext from "../context/GithubContext";

export default function SearchIII() {
	const Context = useContext(GithubContext);
	//text for State
	const [text, setText] = useState('');
	//alert Bool
	const [alert, setAlert] = useState(false);

	//On Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text !== null) {
			//find user
			Context.searchUser(text);
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
		Context.clear();
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
				Context.users.length > 0 && (
					<button
						className="btn btn-block btn-light"
						onClick={handleClick}> Clear
					</button>
				)}
		</div>
	)
}



//PROP Types
SearchIII.propTypes = {
	// searchUser: PropTypes.func.isRequired,
	clear: PropTypes.func.isRequired,
	display: PropTypes.bool.isRequired
}