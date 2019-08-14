import React from 'react';
import PropTypes from "prop-types";

export default function UserItem({user}){
		return (
			<div className="card text-center">
				<img src={user.avatar_url} alt="Profile pic" className="round-img" style={{ width: "60px" }}
				/>
				<h3>{user.login}</h3>
				<div>
					<a href={user.repos_url} className="btn btn-dark btn-sm my-1">
						More
					</a>
				</div>
			</div>
		)
}

//Functional Types
UserItem.propTypes = {
	user: PropTypes.object.isRequired,
}