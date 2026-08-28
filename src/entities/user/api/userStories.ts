import type { ITask } from "@/entities/project/model/projects";
import { $api } from "@/shared/api/axios";

export const getUserStories = async (id: number | null): Promise<ITask[]> => {
	const response = await $api.get(
		`/userstories?assigned_users=${id}&dashboard=true&is_closed=false`
	);
	return response.data;
};
