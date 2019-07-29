import React from 'react';

export default function Icons({ i, icon, heading, descrip }) {
	const styles = {
		icon: {
			display: "inline-block",
			color: "rgb(175, 154, 125)",
			fontSize: "2.5rem",
			marginBottom: "1.5rem",
			boxShadow: "1px 1px 1px rgb(175, 154, 125)",
			padding: ".1em"
		},
		heading: {
			fontSize: "1.5rem",
			color: "#b7ab99",
			textShadow: "1px 2px 2px black",
			textTransfrom: "uppercase",
			margin: "1rem"
		},
		descrip: {
			width: "80%",
			margin: "1rem auto"
		}
	}
	return (
		<article key={i} className="service">
			<span style={styles.icon}>{icon}</span>
			<h6 style={styles.heading}>{heading}</h6>
			<p style={styles.descrip}>{descrip}</p>
		</article>
	)
}
