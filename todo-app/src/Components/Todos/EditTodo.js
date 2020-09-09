import React from "react";
import useForm from "../../Hooks/useForm";
import "../../Styles/TodoList/EditTodo.css";
import { db } from "../../Firebase/Firebase";

const EditTodo = ({ tasks, id, toggleState }) => {
	const [ state, changeHandler ] = useForm(tasks);

	const submitEditedTaskHandler = event => {
		event.preventDefault();
		db.collection("todos").doc(id).set(
			{
				task: state
			},
			{ merge: true }
		);
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
