import { $api } from "../../../shared/api/axios";
import type { IProject, IUser } from "../../../widgets/Navbar/model/type";

export const getUser = async (userId: number | null): Promise<IUser> => {
	const response = await $api.get(`/users/${userId}`);

	return response.data;
};

export const getProjects = async (id: number | null): Promise<IProject[]> => {
	const response = await $api.get(`/projects?member=${id}&order_by=user_order&slight=true`);
	return response.data;
};
