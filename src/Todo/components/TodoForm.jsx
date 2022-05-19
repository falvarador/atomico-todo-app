import { c, css, useState } from "atomico";

function todoForm({ handleAddTodo }) {
	const [description, setDescription] = useState();

	const handleSubmit = e => {
		e.preventDefault();

		handleAddTodo({
			description,
			done: false,
			id: crypto.randomUUID(),
		});

		setDescription("");
	};

	return (
		<host shadowDom>
			<form onsubmit={handleSubmit}>
				<input
					type="text"
					value={description}
					oninput={e => setDescription(e.target.value)}
				/>
				<button disabled={description ? "" : "disabled"}>Add</button>
			</form>
		</host>
	);
}

todoForm.props = {
	handleAddTodo: Function,
};

todoForm.styles = css`
	:host {
		display: block;
		margin-top: 1rem;
	}

	input {
		margin-right: 0.5rem;
	}
`;

export const TodoForm = c(todoForm);
customElements.define("todo-form", TodoForm);
