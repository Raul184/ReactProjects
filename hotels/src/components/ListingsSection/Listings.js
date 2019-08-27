import React from 'react'
import Search from './Search';
import SortBy from './SortBy';
import ListingsTable from './ListingsTable';

export default function Listings() {
	return (
		<div className="Listings">
			<Search />
			<SortBy />
			<ListingsTable />
			<section className="Listings-Pagination">
			</section>
		</div>
	)
}
