import { $api } from "@/shared/api/axios";
import type { ProjectKanban } from "../model/type";

export const getKanbanApi = async (id: string | undefined): Promise<ProjectKanban> => {
	const response = await $api.get(`/projects/by_slug?slug=${id}`);
	return response.data;
};
