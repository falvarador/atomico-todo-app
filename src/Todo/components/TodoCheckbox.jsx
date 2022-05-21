import { c, css } from "atomico";

function todoCheckbox({ value, handleChange }) {
	const { id, description, done } = value;

	return (
		<host shadowDom chec>
			{
				<label>
					<input
						type="checkbox"
						name={id}
						defaultChecked={done}
						onchange={handleChange}
					></input>
					<span>{description}</span>
				</label>
			}
		</host>
	);
}

todoCheckbox.props = {
	checked: {
		type: Boolean,
		default: false,
		Reflect: true,
	},
	value: Object,
	handleChange: Function,
};

todoCheckbox.styles = css`
	:host {
		display: block;
		margin-top: 1rem;
	}

	input:checked {
		color: #efefef;
		text-decoration: line-through;
	}
`;

export const TodoCheckbox = c(todoCheckbox);
customElements.define("todo-checkbox", TodoCheckbox);
