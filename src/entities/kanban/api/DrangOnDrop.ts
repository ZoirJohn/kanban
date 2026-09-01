import { $api } from "@/shared/api/axios";
import type { RequestData } from "../model/DragType";

export const changePositionDrop = async (data: RequestData) => {
	const response = await $api.post(`/userstories/bulk_update_kanban_order`, data);
	return response.data;
};
