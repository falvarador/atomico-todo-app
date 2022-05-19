import { createContext } from "../../context/create_context";

const [useProvider, useContext] = createContext({
	inputText: "",
	setInputText: () => {},
});

export { useProvider, useContext };
