import React, { useEffect, useState } from "react";
import "../../Styles/TodoList/TodoList.css";
import Todo from "../Todos/Todo";
import TodoForm from "./TodoForm";
import { db } from "../../Firebase/Firebase";
import firebase from "firebase";

const TodoList = () => {
	const [ todos, setTodos ] = useState([]);

	useEffect(() => {
		db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
			console.log(snapshot.docs.map(doc => ({ todo: doc.data().task, id: doc.id })));
			setTodos(snapshot.docs.map(doc => ({ todo: doc.data().task, id: doc.id })));
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

	return (
		<div className="todolist">
			{todos.map(todo => {
				return <Todo key={todo.id} tasks={todo.todo} id={todo.id} />;
			})}
			<TodoForm addTask={addNewTask} />
		</div>
	);
};

export default TodoList;
