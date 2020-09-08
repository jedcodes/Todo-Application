import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import "../../Styles/TodoList/EditTodo.css";

const EditTodo = ({ tasks, id, updatedTask, toggleState }) => {
	const [] = useState();
	const [ state, changeHandler ] = useForm(tasks);

	const submitEditedTaskHandler = event => {
		event.preventDefault();
		updatedTask(id, state);
		toggleState();
	};

	return (
		<div className="editTodo">
			<form onSubmit={submitEditedTaskHandler}>
				<input type="text" name="task" value={state} onChange={changeHandler} />
				<button type="submit">Edit Task</button>
			</form>
		</div>
	);
};

export default EditTodo;
