import React, { useState } from "react";
import "../../Styles/TodoList/Todo.css";
import { IconButton } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useToggle from "../../Hooks/useToggle";
import EditTodo from "./EditTodo";

const Todo = ({ tasks, deleteTask, id, updatedTask }) => {
	const [ toggle, toggleState ] = useToggle(false);
	const deleteHandler = () => {
		deleteTask(id);
	};
	return (
		<div className="todo">
			{!toggle ? (
				<ul className="todo__list">
					<h5>{tasks}</h5>
					<div className="todo__icons">
						<IconButton>
							<DoneIcon />
						</IconButton>
						<IconButton onClick={toggleState}>
							<EditIcon />
						</IconButton>
						<IconButton onClick={deleteHandler}>
							<DeleteIcon />
						</IconButton>
					</div>
				</ul>
			) : (
				<EditTodo tasks={tasks} id={id} updatedTask={updatedTask} toggleState={toggleState} />
			)}
		</div>
	);
};

export default Todo;
