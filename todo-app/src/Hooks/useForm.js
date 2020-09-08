import { useState } from "react";

const useForm = initialState => {
	const [ state, setState ] = useState(initialState);

	const changeHandler = event => {
		setState(event.target.value);
	};

	const reset = () => {
		setState("");
	};

	return [ state, changeHandler, reset ];
};

export default useForm;
