//Toggle State Hook helper function
import React from "react";

export default function useToggle(initialValue = false) {
	const [state, setState] = React.useState(initialValue);

	const toggle = () => {
		setState(!state);
	};
	return [state, toggle];
}