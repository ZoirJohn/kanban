import { createStore } from "zustand";
import { persist } from "zustand/middleware/persist";

export type TTokens = {
	access_token: string;
	refresh_token: string;
};

export type TStore = {
	tokens: {
		access_token: string;
		refresh_token: string;
	};
	setTokens: (tokens: TTokens) => void;
};

export const useKanbanStore = createStore<TStore>()(
	persist(
		(set) => ({
			tokens: { access_token: "", refresh_token: "" },
			setTokens: (tokens: TTokens) => set(tokens),
		}),
		{ name: "tokens" }
	)
);
