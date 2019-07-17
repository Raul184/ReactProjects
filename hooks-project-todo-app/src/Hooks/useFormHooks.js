// Hook for Forms >> Grab input , Save it into state and Clean UI.
import React from 'react';

export default initValue => {
	// 1
	const [value, setValue] = React.useState(initValue);
	// 2
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	//3
	const reset = () => {
		setValue("");
	};
	return [value, handleChange, reset];
};
