import { c, css } from "atomico";

import { TodoCheckbox } from "./TodoCheckbox";

function todoList({ todos, setTodos }) {
	const handleChange = e => {
		const { id, done } = e.target.dataset;
		const todo = todos.find(todo => todo.id === id);
		todo.done = done;
		setTodos([...todos]);
	};

	const handleClick = () => {
		setTodos(todos.filter(todo => !todo.done));
	};

	return (
		<host shadowDom>
			{todos.length
				? todos.map(todo => (
						<TodoCheckbox key={todo.id} data={todo} onchange={handleChange} />
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

todoList.props = {
	todos: Array,
	setTodos: Function,
};

todoList.styles = css`
	:host {
		display: block;
		margin-top: 1rem;
	}
`;

export const TodoList = c(todoList);
customElements.define("todo-list", TodoList);
