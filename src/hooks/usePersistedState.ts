import React, { Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
	const [state, set] = React.useState(() => {
		const ISSERVER = typeof window === 'undefined';
		if (!ISSERVER) {
			const storageValue = localStorage.getItem(key);
			if (storageValue) {
				return JSON.parse(storageValue);
			}
			return initialState;
		}
		return initialState;
	});

	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, set];
}

export default usePersistedState;
