import React from 'react'
import Nav from "./components/Nav";
import Users from "./components/Users";
import SearchII from "./components/Search";
import { Switch, Route } from "react-router-dom";
import UserII from "./components/User";
//styles
import './App.css';

export default function AppII() {
	//HOOKS
	const [users, setUsers] = React.useState([]);
	const [user, setUser] = React.useState({});
	const [loading, setLoading] = React.useState(false); 
	// const [alert, setAlert] = React.useState(null);

	//COMPDIDMOUNT for FCs
	React.useEffect(
		async () => {
		//on loading
    setLoading(true);
    const request = await fetch(`https://api.github.com/users?client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
    //format
    const format = await request.json();
    //loaded
		setUsers(format);
		setLoading(false);
	}, []);

	//ON SUBMIT
  const searchUser = async(txt) => {
    //Make request
		const request = await fetch(`https://api.github.com/search/users?q=${ txt }&client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
		
    //format
		const format = await request.json();
		
    //State
    console.log(format.items);
		setUsers(format.items);
		setLoading(false);
	}
	
	//CLEAR
	const clear = () => setUsers("");

  //Single USEr Request
  const singleUserHandler = async (username) => {
    setLoading(true)
    //Make request
    const request = await fetch(`https://api.github.com/users/${ username }`); 
     //format
    const format = await request.json();
    console.log(format);
    //set User
		setUser(format);
		setLoading(false);
  }
	return (
		<div className="App">
        <Nav />
        <div className="container">
          {/* ROUTES */}
          <Switch>
            <Route exact path='/home'
              render={props => (
              <>
								<SearchII
									searchUser={searchUser}
                	clear={clear}
                	display={users.length > 0 ? true : false}
                />
                <Users loading={loading} users={users} />
              </>
              )}
            />
            <Route exact path='/home/:login' render={ (routeParams) => (
              <UserII
                {...routeParams}
                getUser={singleUserHandler}
                user={user}
                loading={loading}
              />
              )}
            />
          </Switch>
          
        </div>
    </div>
	)
}
