import React from 'react';
//styles defined comp.
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div className='Error'>
			<Hero>
				<Banner title="404" subtitle="page not found" />
				<Link to="/" className="btn-primary">Return home</Link>
			</Hero>			
		</div>
	)
}