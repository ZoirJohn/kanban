import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changePositionDrop } from "../api/DrangOnDrop";
import type { RequestData } from "./DragType";

export const useUpdateBulk = () => {
	const useClient = useQueryClient();
	return useMutation({
		mutationFn: (data: RequestData) => changePositionDrop(data),
		onSuccess: () => {
			useClient.invalidateQueries({ queryKey: ["tasks"] });
		},
	});
};
