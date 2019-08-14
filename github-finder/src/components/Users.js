import React from 'react';
import UserItem from "./UserItem.js";
import PropTypes from "prop-types"

export default function Users({users , loading}) {
	return (
		<div className="Users" style={usersStyle}>
			{
				(loading ? <iframe title="loader" src="https://giphy.com/embed/VlJkP9Vxi4nkI" width="100%" height="100%" frameBorder="0" />
					:
					users.length > 0 &&
						users.map(user => {
							return <UserItem key={user.id} user={user} />
						})	
				)
			}
		</div>
	)
}

//TYPES for Component
Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}
//Styles
const usersStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}
