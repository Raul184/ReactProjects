import React from 'react'
// Components
import Title from "./Title";
import Icons from "./Icons";
//Icons 
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default function Services() {
	//Icons
	const icons = [
		{
			icon: <FaCocktail />,
			heading: "Tasty Cocktails",
			descrip: "Simple text to be displayed here as a briefly explanation of the activity"
		},
		{
			icon: <FaHiking />,
			heading: "Endless Hiking",
			descrip: "Simple text to be displayed here as a briefly explanation of the activity"
		},
		{
			icon: <FaShuttleVan />,
			heading: "Free Shuttle",
			descrip: "Simple text to be displayed here as a briefly explanation of the activity"
		},
		{
			icon: <FaBeer />,
			heading: "Great Beer",
			descrip: "Simple text to be displayed here as a briefly explanation of the activity"
		}
	];
	//Styles
	const styles = {
		section: {
			background: "rgb(235, 235, 235)",
			textAlign: "center"
		},
		columns: {
			width: "90vw",
			margin: "0 auto",
			padding: "2rem",
			display: "grid",
			gridTemplateColumns: "repeat(4, minmax(auto, 1fr))",
			gridRowGap: "2rem",
			gridColumnGap: "50px"
		}
	}
	return (
		<div className="Services" style={styles.section}>
			<Title title="Services" />
			<div className="ServiceColumns" style={styles.columns}>
				{icons.map((item, index) => (
					<Icons
						key={index}
						i={index}
						icon={item.icon}
						heading={item.heading}
						descrip={item.descrip}
					/>
				))}
			</div>
		</div>
	)
}
