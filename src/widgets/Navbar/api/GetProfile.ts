import { $api } from "../../../shared/api/axios";
import type { IUser } from "../model/type";

export const getUser = async (userId: number | null): Promise<IUser> => {
	const response = await $api.get(`/users/${userId}`);

	return response.data;
};
