import React from "react";
import TodoList from "./Components/Todos/TodoList";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
	return (
		<div className="app">
			<TodoList />
		</div>
	);
};

export default App;
