import { useQuery } from "@tanstack/react-query";
import { getKanbanTasks } from "../api/GetKanbanApi";

export const useTasks = (id: number | undefined) => {
	return useQuery({
		queryFn: () => getKanbanTasks(id),
		queryKey: ["tasks", id],
	});
};
