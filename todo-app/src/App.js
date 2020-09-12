import React from "react";
import TodoList from "./Components/Todos/TodoList";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<TodoList />
		</div>
	);
};

export default App;
