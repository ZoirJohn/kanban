import { getProjects } from "@/entities/project/api/GetProfile";
import { useQuery } from "@tanstack/react-query";

export const useProject = (id: number | null) => {
	return useQuery({
		queryKey: ["projects", id],
		queryFn: () => getProjects(id),
		enabled: !!id,
	});
};
