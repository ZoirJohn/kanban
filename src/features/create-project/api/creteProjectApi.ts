import { $api } from "../../../shared/api/axios";
import type { ICreateProject } from "../model/types";

export const creteProjectApi = async (response: ICreateProject) => {
	const result = await $api("/projects", {
		method: "POST",
		data: response,
	});

	return result;
};
