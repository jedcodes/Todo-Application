import React, { useEffect, useState } from "react";
import "../../Styles/TodoList/TodoList.css";
import Todo from "../Todos/Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
	const [ todos, setTodos ] = useState([
		{ task: "Walk The Dogs", id: 1, isCompleted: false },
		{ task: "Buy Shoes", id: 2, isCompleted: false },
		{ task: "Walk The Dogs", id: 3, isCompleted: false }
	]);

	const addNewTask = newTask => {
		// Add New Todos To Database
		setTodos([ ...todos, { id: 4, task: newTask, completed: false } ]);
	};

	const updatedTasks = (id, editedTask) => {
		// Add Updated Task To Database
		const updatedTask = todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, task: editedTask };
			}
			return todo;
		});
		setTodos(updatedTask);
	};

	const deleteTasks = id => {
		// Delete Task From Database
		const deletedTask = todos.filter(todo => todo.id !== id);
		setTodos(deletedTask);
	};

	return (
		<div className="todolist">
			{todos.map(todo => {
				return (
					<Todo key={todo.id} tasks={todo.task} id={todo.id} deleteTask={deleteTasks} updatedTask={updatedTasks} />
				);
			})}
			<TodoForm addTask={addNewTask} />
		</div>
	);
};

export default TodoList;
