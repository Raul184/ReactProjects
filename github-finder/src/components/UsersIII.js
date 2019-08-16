import React , { useContext }from 'react';
import UserItem from "./UserItem.js";
//COntext
import GithubContext from "../context/GithubContext";

export default function Users() {

	const Context = useContext(GithubContext);
	const { loading, users } = Context;
	return (
		<div className="Users" style={usersStyle}>
			{
				loading ? <iframe title="loader" src="https://giphy.com/embed/VlJkP9Vxi4nkI" width="100%" height="100%" frameBorder="0" />
				:
					users.map(user => {
						return <UserItem key={user.id} user={user} />
					})		
			}	
		</div>
	)
}

//Styles
const usersStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}

