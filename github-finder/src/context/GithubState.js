import React , {useReducer} from "react";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";

import {
	SEARCH_USERS,
	GET_USER,
	CLEAR_USERS,
	SET_LOADING
} from './types';


const GithubState = (props) => {
	const initState = {
		users: [],
		user: {},
		loading: false
	}

	//ACTIONS (Reducers)

	const [state, dispatch] = useReducer(GithubReducer, initState);

	//Search Users
	const searchUser = async(txt) => {
		setLoading()
    //Make request
		const request = await fetch(`https://api.github.com/search/users?q=${ txt }&client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
		
    //format
		const format = await request.json();
    //State
		//set User
		dispatch({
			type: SEARCH_USERS,
			payload: format.items
		})
	}

	//Get Single User
	const getUser = async (username) => {
		setLoading()
		//Make request
		const request = await fetch(`https://api.github.com/users/${ username }`);
		//format
		const format = await request.json();
		console.log(format);
		//set User
		dispatch({
			type: GET_USER,
			payload: format
		})
	}

	//Clear
	const clear = () => dispatch({ type: CLEAR_USERS });

	//Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING })
	
	return <GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				searchUser,
				getUser,
				clear
			}}
		>
			{props.children}
		</GithubContext.Provider>
}

export default GithubState;