import React from "react";
import "../../Styles/TodoList/Todo.css";
import { IconButton } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useToggle from "../../Hooks/useToggle";
import EditTodo from "./EditTodo";
import { db } from "../../Firebase/Firebase";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Popup from "reactjs-popup";
import UndoIcon from "@material-ui/icons/Undo";

const Todo = ({ tasks, id, completed }) => {
	const [ toggle, toggleState ] = useToggle(false);

	const deleteTasksHandler = () => {
		// Delete Task From Database
		db.collection("todos").doc(id).delete();
	};

	const completedTaskHandler = () => {
		// Edit Task Completion In Database
		db.collection("todos").doc(id).set(
			{
				isCompleted: !toggle
			},
			{ merge: true }
		);
	};
	const undoCompletionHandler = () => {
		// Edit Task Completion In Database
		db.collection("todos").doc(id).set(
			{
				isCompleted: false
			},
			{ merge: true }
		);
	};

	return (
		<div className="todo">
			{!toggle ? (
				<ul className={`todo__list ${completed && "todo__completed"}`}>
					<h5>{tasks}</h5>
					<div className="todo__icons">
						{
							<Popup
								position="right bottom"
								closeOnDocumentClick
								trigger={open => <IconButton>{open ? <MoreHorizIcon /> : <MoreHorizIcon />}</IconButton>}
							>
								<IconButton>
									{completed ? (
										<UndoIcon onClick={undoCompletionHandler} />
									) : (
										<DoneIcon onClick={completedTaskHandler} />
									)}
								</IconButton>
								<IconButton onClick={toggleState}>
									<EditIcon />
								</IconButton>
								<IconButton onClick={deleteTasksHandler}>
									<DeleteIcon />
								</IconButton>
							</Popup>
						}
					</div>
				</ul>
			) : (
				<EditTodo tasks={tasks} id={id} toggleState={toggleState} />
			)}
		</div>
	);
};

export default Todo;
