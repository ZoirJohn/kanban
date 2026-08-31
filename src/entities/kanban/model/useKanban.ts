import { useQuery } from "@tanstack/react-query";
import { getKanbanApi } from "../api/GetKanbanApi";

export const useKanban = (slug: string | undefined) => {
	return useQuery({
		queryFn: () => getKanbanApi(slug),
		queryKey: ["kanbanData", slug],
		enabled: !!slug,
	});
};
