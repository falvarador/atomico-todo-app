import * as Atomico from "atomico";

import { useChannel } from "@atomico/hooks/use-channel";

function createContext(initialValue) {
	const channel = Math.random().toString(36).slice(-6);

	const useProvider = (value, deps = []) => {
		const [, setContext] = useChannel(channel);

		Atomico.useLayoutEffect(() => {
			setContext(value);
		}, deps);
	};

	const useContext = () => {
		const [context] = useChannel(channel);
		return context || initialValue;
	};

	return [useProvider, useContext];
}

export { createContext };
