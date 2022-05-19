import { createContext } from "../../context/create_context";

const [useProvider, useContext] = createContext({
	title: "",
	todos: [],
	setTitle: () => {},
	setTodos: () => {},
});

export { useProvider, useContext };
