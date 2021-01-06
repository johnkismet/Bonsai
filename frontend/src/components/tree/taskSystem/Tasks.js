import React, { useState } from "react";
// import { todos as todosList } from "./todos";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";
import "./Tasks.css";

function Tasks(props) {
	const [todos, setTodos] = useState([]);
	const [inputText, setInputText] = useState("");

	const handleAdd = (event) => {
		if (event.which === 13) {
			const newId = uuid();
			const newTodo = {
				userId: 1,
				id: newId,
				title: inputText,
				completed: false,
			};
			const newTodos = {
				...todos,
			};
			newTodos[newId] = newTodo;
			setTodos(newTodos);
			setInputText("");
		}
	};

	const handleToggle = (id) => {
		const newTodos = { ...todos };
		newTodos[id].completed = !newTodos[id].completed;
		setTodos(newTodos);
	};

	const handleDelete = (id) => {
		const newTodos = { ...todos };
		delete newTodos[id];
		setTodos(newTodos);
	};

	const handleDeleteAll = () => {
		const newTodos = { ...todos };
		for (const todo in newTodos) {
			if (newTodos[todo].completed === true) {
				delete newTodos[todo];
			}
		}
		setTodos(newTodos);
	};

	return (
		<section className="todoapp">
			<header className="header">
				<input
					onChange={(event) => setInputText(event.target.value)}
					onKeyDown={(event) => handleAdd(event)}
					value={inputText}
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
				/>
			</header>
			<TodoList
				todos={Object.values(todos)}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
			<footer className="footer">
				<span className="todo-count">
					{/* <strong>
						{
							Object.values(todos).filter((todo) => {
								if (props.match.params.type === "completed") {
									return todo.completed;
								} else if (props.match.params.type === "active") {
									return !todo.completed;
								} else {
									return !todo.completed;
								}
							}).length
						}
					</strong>{" "}
					item(s) left */}
				</span>

				<ul className="filters">
					<li>
						<Link
							to="/"
							// className={
							// 	props.match.params.type === undefined ? "selected" : ""
							// }
						>
							All
						</Link>
					</li>
					<li>
						<Link
							to="/active"
							// className={props.match.params.type === "active" ? "selected" : ""}
						>
							Active
						</Link>
					</li>
					<li>
						<Link
							to="/completed"
							// className={
							// 	props.match.params.type === "completed" ? "selected" : ""
							// }
						>
							Completed
						</Link>
					</li>
				</ul>

				{/* <button className="btn clear-completed" onClick={handleDeleteAll}>
					Clear completed
				</button> */}
			</footer>
		</section>
	);
}

export default Tasks;
