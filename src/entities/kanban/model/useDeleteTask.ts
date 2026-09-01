import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../api/GetKanbanApi";

export const useTaskDelete = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id: number | null) => deleteTask(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
		},
	});
};
