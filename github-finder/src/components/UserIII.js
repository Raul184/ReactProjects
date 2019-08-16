import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import GithubContext from "../context/GithubContext";

export default function UserIII({ match }) {
	const Context = useContext(GithubContext);
	//ComponentDidMount/Update for Functional Components
	React.useEffect(() => {
		Context.getUser(match.params.login);
		console.log(Context.user);
		//eslint-disable-next-line   
	}, []);
	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		company,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = Context.user;
	return (
		<>
			<Link to='/home' className="btn btn-light">Back</Link>
				Hireable: {hireable}
				<div className="card grid-2">
					<div className="all-center">
						<img src={avatar_url} alt="profile" className="round-img" style={{ width: "150px" }} />
						<h1>{name}</h1>
						<p>Location:{location}</p>				
				{
					bio && <>
						<h3>Bio</h3>
						<p>{bio}</p>
					</>
				}
				<a href={html_url} className="btn">Github profile</a>
				<ul>
					<li>{login && <>
						<strong>Username:</strong>{login}
					</>}
					</li>
					<li>{company && <>
						<strong>Company:</strong>{company}
					</>}
					</li>
					<li>{blog && <>
						<strong>Blog:</strong>{blog}
					</>}
					</li>
						</ul>
						</div>
				</div>
				<div className="card text-center">
					<div className="badge badge-primary">Followers: {followers}</div>
					<div className="badge badge-success">Following: {following}</div>
					<div className="badge badge-light">Public repos: {public_repos}</div>
					<div className="badge badge-dark">Public Gists: {public_gists}</div>
				</div>
		</>
	)
}
