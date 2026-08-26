import { $api } from "../../../shared/api/axios";
import type { ILogin } from "../model/type";

export const auth = async (response: ILogin) => {
	const result = await $api("/auth", {
		method: "POST",
		data: response,
	});

	return result;
};
