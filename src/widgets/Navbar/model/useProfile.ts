import { useQuery } from "@tanstack/react-query";

import { getUser } from "../api/GetProfile";

export const useProfile = (userId: number | null) => {
	return useQuery({
		queryKey: ["user", userId],
		queryFn: () => getUser(userId),
		enabled: !!userId,
	});
};
