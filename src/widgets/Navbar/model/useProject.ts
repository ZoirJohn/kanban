import { useQuery } from "@tanstack/react-query";

import { getProjects } from "../api/GetProfile";

export const useProject = (id: number | null) => {
	return useQuery({
		queryKey: ["projects", id],
		queryFn: () => getProjects(id),
		enabled: !!id,
	});
};
