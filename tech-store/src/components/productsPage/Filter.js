import React from 'react'
import { Consumer } from "../contextObj";

export default function Filter() {
	return (
		<Consumer>
			{value => {
				const { search, min, max, company, price, handleChange, storedProducts } = value;
				//Companies for Select Input
				let companies = new Set();
				companies.add('all');
				//Add on set Unique values
				for (let comp in storedProducts) {
					companies.add(storedProducts[comp]["company"])
				}
				//Pass to Arr
				companies = [...companies];
				return(
					<div className="Filter" style={style.filter}>
						<div className="search">
							<label htmlFor="search">Search product</label>
							<input
								type="text"
								id="search"
								name="search"
								onChange={handleChange}
								value={search}
								className="filterProduct"
							/>
						</div>
						<div className="companySelect">
							<label htmlFor="company">Company</label>
							<select
								name="company"
								id="company"
								className="filterProduct"
								onChange={handleChange}
								value={company}
							>
								{companies.map((it, idx) => {
									return <option key={idx} value={it}>{it}</option>
								})
								}
							</select>
						</div>
						<div className="range">
							<label htmlFor="price">
								<p>Product price: <span>{price}</span></p>
							</label>
							<input
								type="range"
								name="price"
								id="price"
								min={min}
								max={max}
								className="filterPrice"
								value={price}
								onChange={handleChange} />
						</div>
					</div>
				)
			}}
		</Consumer>
	)
}


const style = {
	filter: {
		display: "grid",
		gridTemplateColumns: "repeat(3,1fr)",
		justifyItems: "center",
		alignItems: "center"
	}
}