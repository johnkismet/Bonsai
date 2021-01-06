import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
	return (
		<section className="main">
			<ul className="todo-list">
				{props.todos
					.filter((todo) => {
						if (props.filter === "completed") {
							return todo.completed;
						} else if (props.filter === "active") {
							return !todo.completed;
						} else {
							return true;
						}
					})
					.map((todo) => (
						<TodoItem
							title={todo.title}
							completed={todo.completed}
							key={todo.id}
							id={todo.id}
							handleToggle={props.handleToggle}
							handleDelete={props.handleDelete}
						/>
					))}
			</ul>
		</section>
	);
}

export default TodoList;
