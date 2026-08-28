import { useQuery } from "@tanstack/react-query";
import { getUserStories } from "../api/userStories";

export const useUserStory = (id: number | null) => {
	return useQuery({
		queryKey: ["userStore", id],
		queryFn: () => getUserStories(id),
		enabled: !!id,
	});
};
