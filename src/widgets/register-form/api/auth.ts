import { $api } from "../../../shared/api/axios";
import type { IRegister } from "../model/type";

export const auth = async (response: IRegister) => {
	const result = await $api("/auth/register", {
		method: "POST",
		data: response,
	});

	return result;
};
