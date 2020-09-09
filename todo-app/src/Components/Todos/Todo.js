import React from "react";
import "../../Styles/TodoList/Todo.css";
import { IconButton } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useToggle from "../../Hooks/useToggle";
import EditTodo from "./EditTodo";
import { db } from "../../Firebase/Firebase";

const Todo = ({ tasks, id }) => {
	const [ toggle, toggleState ] = useToggle(false);

	const deleteTasksHandler = () => {
		// Delete Task From Database
		db.collection("todos").doc(id).delete();
	};

	const completedTasks = () => {
		// Edit Task Completion In Database
		db.collection("todos").doc(id).set(
			{
				isCompleted: toggleState()
			},
			{ merge: true }
		);
	};

	return (
		<div className="todo">
			{!toggle ? (
				<ul className="todo__list">
					<h5>{tasks}</h5>
					<div className="todo__icons">
						<IconButton onClick={completedTasks}>
							<DoneIcon />
						</IconButton>
						<IconButton onClick={toggleState}>
							<EditIcon />
						</IconButton>
						<IconButton onClick={deleteTasksHandler}>
							<DeleteIcon />
						</IconButton>
					</div>
				</ul>
			) : (
				<EditTodo tasks={tasks} id={id} toggleState={toggleState} />
			)}
		</div>
	);
};

export default Todo;
