import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creteProjectApi } from "../api/creteProjectApi";
import type { ICreateProject } from "./types";
import axios from "axios";

export const useCreateKanbanProject = () => {
	const uesQueryL = useQueryClient();
	return useMutation({
		mutationFn: (e: ICreateProject) => creteProjectApi(e),
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data);
				notifications.show({
					message: error.response?.data?._error_message ?? error.message,
					color: "red",
				});
			}
		},
		onSuccess: () => {
			notifications.show({
				message: "Created successfully",
				color: "green",
			});
			uesQueryL.invalidateQueries({ queryKey: ["projects"] });
		},
	});
};
