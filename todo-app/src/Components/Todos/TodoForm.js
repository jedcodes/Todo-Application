import React from "react";
import "../../Styles/TodoList/TodoForm.css";
import useForm from "../../Hooks/useForm";

const TodoForm = ({ addTask }) => {
	const [ state, changeHandler, reset ] = useForm("");

	const submitHandler = event => {
		event.preventDefault();
		addTask(state);
		reset();
	};

	return (
		<form className="todoForm" onSubmit={submitHandler}>
			<input value={state} onChange={changeHandler} color="secondary" placeholder="Enter Task..." />
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TodoForm;
