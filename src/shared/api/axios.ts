import axios from "axios";

export const $api = axios.create({
	baseURL: "https://api.taiga.io/api/v1/",
	headers: {
		"Content-Type": "application/json",
	},
});
