import { useForm } from "@mantine/form";
import type { UserStory } from "../model/AddStoreType";

export const useStoreAddForm = () => {
	return useForm<UserStory>({
		initialValues: {
			_attrs: {
				project: 1803419,
				subject: "",
				description: "",
				tags: [],
				points: {},
				swimlane: null,
				status: 10942944,
				is_archived: false,
			},
			_name: "userstories",
			_dataTypes: {},
			_modifiedAttrs: {
				tags: [],
				description: "podsjifj",
				subject: "Umidjon",
			},
			_isModified: true,
			project: 1803419,
			subject: "Umidjon",
			description: "podsjifj",
			tags: [],
			points: {},
			swimlane: null,
			status: 10942944,
			is_archived: false,
			is_closed: false,
		},
	});
};
