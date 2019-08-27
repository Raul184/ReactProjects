import React from 'react'
import {
	FaBed,
	FaSquare,
	FaLocationArrow,
	FaMoneyBill
} from 'react-icons/fa';

export default function ListingItem() {
	return (
		<div className="ListingItem">
			<div className="ImgCapture">
				<img src='cc.gog.com' alt="house" />
				<span>HouseName</span>
				<div className="details">
					<div className="UserImg"></div>
					<div className="UserImgDescription">
						<span>fullname..</span>
						<span>Published on date..</span>
					</div>
					<div className="features">
						<span>Feature 1 <FaSquare/></span>
						<span>Feature 1 <FaBed/></span>
						<span>Feature 1</span>
						<span>Feature 1</span>
					</div>
					</div>
				<span>Apartment name</span>
			</div>	
			<p><FaMoneyBill/>Price</p>
			<p><FaLocationArrow/>Location</p>
		</div>
	)
}
