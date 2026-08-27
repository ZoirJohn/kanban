import { createStore } from "zustand";
import { persist } from "zustand/middleware";

export type TTokens = {
	access_token: string;
	refresh_token: string;
};

export type TStore = {
	userId: number | null;
	tokens: TTokens;

	setAuth: (userId: number, tokens: TTokens) => void;
	logout: () => void;
};

const initialTokens: TTokens = {
	access_token: "",
	refresh_token: "",
};

export const useKanbanStore = createStore<TStore>()(
	persist(
		(set) => ({
			userId: null,
			tokens: initialTokens,

			setAuth: (userId, tokens) =>
				set({
					userId,
					tokens,
				}),

			logout: () =>
				set({
					userId: null,
					tokens: initialTokens,
				}),
		}),
		{
			name: "kanban-auth",
		}
	)
);
