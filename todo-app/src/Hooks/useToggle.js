import { useState } from "react";

const useToggle = initialState => {
	const [ toggle, setToggle ] = useState(initialState);

	const toggleState = () => {
		setToggle(!toggle);
	};
	return [ toggle, toggleState ];
};

export default useToggle;
