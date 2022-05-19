import { c } from "atomico";

import { TodoContainer } from "./Todo/components/TodoContainer";

function app() {
	return (
		<host shadowDom>
			<TodoContainer />
		</host>
	);
}

export const App = c(app);
customElements.define("my-app", App);
