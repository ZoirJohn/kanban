export interface RequestData {
	project_id: number;
	status_id: number;
	bulk_userstories: number[];
	after_userstory_id: number | null;
}
