import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import type { ILogin } from "./type";
import { auth } from "../api/auth";
import { useKanbanStore } from "../../../shared/store/store";
import { useStore } from "zustand";
export const useLoginUser = () => {
	const setToken = useStore(useKanbanStore, (state) => state.setTokens);

	return useMutation({
		mutationFn: (data: ILogin) => auth(data),

		onSuccess: (e) => {
			console.log(e.data);

			setToken({
				refresh_token: e.data.refresh,
				access_token: e.data.auth_token,
			});

			notifications.show({
				message: "Successfully logged in",
				color: "green",
			});
		},
	});
};
