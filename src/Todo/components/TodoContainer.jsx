import { c } from "atomico";
import { useLocalStorage } from "../../customs/hooks/useLocalStorage";
import { useProvider } from "../presentations/todo_context";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function todoContainer() {
	const [todos, setTodos] = useLocalStorage("todos", []);

	useProvider(
		{
			todos,
			setTodos,
		},
		[todos]
	);

	const handleAddTodo = todo => {
		setTodos([...todos, todo]);
	};

	return (
		<host shadowDom>
			<TodoForm handleAddTodo={handleAddTodo} />
			<TodoList />
		</host>
	);
}

export const TodoContainer = c(todoContainer);
customElements.define("todo-container", TodoContainer);
