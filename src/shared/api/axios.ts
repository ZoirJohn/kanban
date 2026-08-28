import axios from "axios";
import { useKanbanStore } from "../store/store";

export const $api = axios.create({
	baseURL: "https://api.taiga.io/api/v1/",
	headers: {
		"Content-Type": "application/json",
	},
});

$api.interceptors.request.use((config) => {
	const token = useKanbanStore.getState().tokens.access_token;

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

$api.interceptors.response.use(
	(response) => response,

	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status !== 401) {
			return Promise.reject(error);
		}

		const refreshToken = useKanbanStore.getState().tokens.refresh_token;

		if (!refreshToken) {
			useKanbanStore.getState().logout();
			return Promise.reject(error);
		}

		try {
			const response = await axios.post("https://api.taiga.io/api/v1/auth/refresh/", {
				refresh: refreshToken,
			});

			const newAccessToken = response.data.access;

			useKanbanStore.setState((state) => ({
				tokens: {
					...state.tokens,
					access_token: newAccessToken,
				},
			}));

			originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

			return $api(originalRequest);
		} catch {
			useKanbanStore.getState().logout();

			return Promise.reject(error);
		}
	}
);
