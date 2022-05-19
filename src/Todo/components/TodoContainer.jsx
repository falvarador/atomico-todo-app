import { c, useState } from "atomico";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function todoContainer() {
	const [todos, setTodos] = useState([]);

	const handleAddTodo = todo => {
		setTodos([...todos, todo]);
	};

	return (
		<host shadowDom>
			<TodoForm handleAddTodo={handleAddTodo} />
			<TodoList todos={todos} setTodos={setTodos} />
		</host>
	);
}

export const TodoContainer = c(todoContainer);
customElements.define("todo-container", TodoContainer);
