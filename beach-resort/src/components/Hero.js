import React from 'react';

//STATIC PROPS
Hero.defaultProps = {
	hero : "defaultHero"
}

export default function Hero({children, hero }) {
	return (
		<header className={hero}>
			{children}
		</header>
	)
}
