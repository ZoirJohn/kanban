import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import type { ILogin } from "./type";
import { auth } from "../api/auth";
import { useKanbanStore } from "../../../shared/store/store";
import { useStore } from "zustand";

export const useLoginUser = () => {
	const setAuth = useStore(useKanbanStore, (state) => state.setAuth);

	return useMutation({
		mutationFn: (data: ILogin) => auth(data),

		onSuccess: (response) => {
			console.log(response.data);

			setAuth(response.data.id, {
				refresh_token: response.data.refresh,
				access_token: response.data.auth_token,
			});

			notifications.show({
				message: "Successfully logged in",
				color: "green",
			});
		},
	});
};
