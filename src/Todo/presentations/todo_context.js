import { createContext } from "../../context/create_context";

const [useProvider, useContext] = createContext({
	todos: [],
	setTodos: () => {},
});

export { useProvider, useContext };
