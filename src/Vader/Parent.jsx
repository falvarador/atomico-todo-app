import { c, useState } from "atomico";
import { useProvider } from "./context/vader_context";

function parent() {
	const [value, setValue] = useState("Noooo!");

	useProvider(
		{
			value,
			setInputText: setValue,
		},
		[value]
	);

	return (
		<host shadowDom>
			<h2>Darth Vader: I am your father</h2>
			<slot />
		</host>
	);
}

export const Parent = c(parent);

customElements.define("vader-parent", Parent);
