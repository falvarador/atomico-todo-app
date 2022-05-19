import { c } from "atomico";
import { useContext } from "./context/vader_context";

function child() {
	const { value, setInputText } = useContext();

	return (
		<host shadowDom>
			<h2>
				Luke skywalker:
				<input
					value={value}
					oninput={event => setInputText(event.currentTarget.value)}
				/>
				<button onclick={() => setInputText("Soy el hijo 😘")}>
					Cambiar mensaje
				</button>
			</h2>
		</host>
	);
}

export const Child = c(child);

customElements.define("vader-child", Child);
