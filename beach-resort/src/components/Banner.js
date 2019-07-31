import React from 'react'

//STYLES 
const styles = {
	Banner:
	{
		display: "inline-block",
		background: "rgba(0, 0, 0, .4)",
		border: "1px solid lightcyan",
		boxShadow: "2px 2px 5px darkgray",
		borderRadius: "15px",
		fontSize: "2.5rem",
		color: "white",
		textAlign: "center",
		textTransform: "capitalize",
		padding: "1rem"
	},
	BannerUnderline: {
		width: "10rem",
		height: "5px",
		background: "rgb(183, 171, 153)",
		margin: "1.7rem auto"
	},
	BannerParag: {
		fontSize: "1.2rem",
		marginBottom: "2rem"
	}
}

export default function Banner({children, title, subtitle}) {
	return (
		<div className="Banner" style={styles.Banner}>
			<h1>{title}</h1>
			<div className="BannerUnderline" style={styles.BannerUnderline}></div>
			<p className="BannerParag" style={styles.BannerParag}>{subtitle}</p>
			{children}
		</div>
	)
}
