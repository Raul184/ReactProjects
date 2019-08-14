import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UserItem({user}){
		return (
			<div className="card text-center">
				<img src={user.avatar_url} alt="Profile pic" className="round-img" style={{ width: "60px" }}
				/>
				<h3>{user.login}</h3>
				<div>
					<Link to={`/home/${user.login}`} className="btn btn-dark btn-sm my-1">
						More
					</Link>
				</div>
			</div>
		)
}

//Functional Types
UserItem.propTypes = {
	user: PropTypes.object.isRequired,
}