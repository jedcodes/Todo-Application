import React, { useEffect, useState } from "react";
import "../../Styles/TodoList/TodoList.css";
import Todo from "../Todos/Todo";
import TodoForm from "./TodoForm";
import { db } from "../../Firebase/Firebase";
import firebase from "firebase";
import Fade from "react-reveal/Fade";
import TransitionGroup from "react-transition-group/TransitionGroup";

const TodoList = () => {
	const [ todos, setTodos ] = useState([]);

	// Fetch Data Stored In Firebase Database And Display Results On Screen Once Component Loads
	useEffect(() => {
		db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
			const todoObject = snapshot.docs.map(doc => ({ todo: doc.data(), id: doc.id }));

			console.log(todoObject);
			setTodos(todoObject);
		});
	}, []);

	const addNewTask = newTask => {
		// Add New Todos To Database
		db.collection("todos").add({
			task: newTask,
			isCompleted: false,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
	};

	const todoSummary = () => {
		const completedTodos = todos.filter(todo => {
			return todo.todo.isCompleted === true;
		});
		return completedTodos.length;
	};

	const groupProps = {
		appear: false,
		enter: true,
		exit: true
	};

	return (
		<div className="todolist">
			<h5>Task(s) Completed: {todoSummary()}</h5>
			<TransitionGroup {...groupProps}>
				{todos.map(todo => {
					return (
						<Fade key={todo.id} collapse top>
							<Todo key={todo.id} tasks={todo.todo.task} id={todo.id} completed={todo.todo.isCompleted} />
						</Fade>
					);
				})}
			</TransitionGroup>
			<TodoForm addTask={addNewTask} />
		</div>
	);
};

export default TodoList;
