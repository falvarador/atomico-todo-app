import { c } from "atomico";

// import { useContext } from "../presentations/todo_context";

function todoCheckbox({ id, description, done, onchange }) {
	// const { title } = useContext();

	return (
		<host shadowDom>
			{/* {title}
			<button onclick={() => setIsEdit(true)}>Edit</button>
			<button>Delete</button> */}
		</host>
	);
}

// todoCheckbox.props = {
// 	setIsEdit: Function,
// };

export const TodoCheckbox = c(todoCheckbox);
customElements.define("todo-checkbox", TodoCheckbox);
