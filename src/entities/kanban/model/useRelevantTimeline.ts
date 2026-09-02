import { useQuery } from "@tanstack/react-query";
import { getRelevant } from "../api/GetKanbanApi";

export const useRelevantTimeline = (id: number | undefined, page: number | undefined = 1) => {
	return useQuery({
		queryKey: ["timeline", id, page],
		queryFn: () => getRelevant(id, page),
		enabled: !!id,
	});
};
