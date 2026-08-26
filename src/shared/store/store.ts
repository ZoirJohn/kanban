import { createStore } from "zustand";
import { persist } from "zustand/middleware";

export type TTokens = {
	access_token: string;
	refresh_token: string;
};

export type TStore = {
	tokens: TTokens;
	setTokens: (tokens: TTokens) => void;
	logout: () => void;
};

const initialTokens: TTokens = {
	access_token: "",
	refresh_token: "",
};

export const useKanbanStore = createStore<TStore>()(
	persist(
		(set) => ({
			tokens: initialTokens,

			setTokens: (tokens) =>
				set({
					tokens,
				}),

			logout: () =>
				set({
					tokens: initialTokens,
				}),
		}),
		{
			name: "tokens",
		}
	)
);
