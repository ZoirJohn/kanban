import { $api } from "@/shared/api/axios";
import type { ProjectKanban } from "../model/type";
import type { ITask } from "../model/TasksType";

export const getKanbanApi = async (id: string | undefined): Promise<ProjectKanban> => {
	const response = await $api.get(`/projects/by_slug?slug=${id}`);
	return response.data;
};

export const getKanbanTasks = async (id: number | undefined): Promise<ITask[]> => {
	const response = await $api.get(`/userstories?project=${id}&status__is_archived=false`);
	return response.data;
};
