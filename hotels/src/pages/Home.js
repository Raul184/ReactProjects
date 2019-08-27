import React from 'react'
//Comp.
import Filter from '../components/FilterSection/Filter';
import Listings from '../components/ListingsSection/Listings';
//SASS
import './Home.scss';

export default function Home() {
	return (
		<div className="Home-Content">
			<Filter />
			<Listings />
		</div>
	)
}

