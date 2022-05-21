import { c, css } from "atomico";
import { useContext } from "../presentations/todo_context";

import { TodoCheckbox } from "./TodoCheckbox";

function todoList() {
	const { todos, setTodos } = useContext();

	const handleChange = e => {
		const { name } = e.target;
		const todo = todos.find(todo => todo.id === name);

		todo.done = !todo.done;
		setTodos([...todos]);
	};

	const handleClick = () => {
		setTodos(todos.filter(todo => !todo.done));
	};

	return (
		<host shadowDom>
			{todos.length
				? todos.map(todo => (
						<TodoCheckbox
							key={todo.id}
							value={todo}
							handleChange={handleChange}
						/>
				  ))
				: "No todos yet!"}
			{todos.length ? (
				<p>
					<button onclick={handleClick}>Delete all done</button>
				</p>
			) : null}
		</host>
	);
}

todoList.styles = css`
	:host {
		display: block;
		margin-top: 1rem;
	}

	todo-checkbox {
		color: #2c3e50;
		text-decoration: none;
	}
`;

export const TodoList = c(todoList);
customElements.define("todo-list", TodoList);
