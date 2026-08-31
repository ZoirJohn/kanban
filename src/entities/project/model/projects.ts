export interface Project {
	name: string;
	slug: string;
	color: string;
	likes: number;
	watchers: number;
	members?: number;
	tasks?: number;
}

export interface MyProject {
	id: string;
	title: string;
	description: string;
	isPrivate?: boolean;
	isFeatured?: boolean;
	color?: string;
	avatarUrl?: string;
}

export const projects: Project[] = [
	{
		name: "Anor",
		slug: "no",
		color: "#b5b4e8",
		likes: 0,
		watchers: 1,
		members: 1,
		tasks: 0,
	},
	{
		name: "Anor",
		slug: "anor",
		color: "#8ee0a7",
		likes: 0,
		watchers: 4,
		members: 4,
	},
];
export type IAssignedToExtraInfo = {
	username: string;
	full_name_display: string;
	photo: string | null;
	big_photo: string | null;
	gravatar_id: string;
	is_active: boolean;
	id: number;
};

export type IStatusExtraInfo = {
	name: string;
	color: string;
	is_closed: boolean;
};

export type IProjectExtraInfo = {
	name: string;
	slug: string;
	logo_small_url: string | null;
	id: number;
};

export type ITask = {
	due_date: string | null;
	due_date_reason: string;
	due_date_status: string;

	assigned_to: number;
	assigned_to_extra_info: IAssignedToExtraInfo;

	status: number;
	status_extra_info: IStatusExtraInfo;

	project: number;
	project_extra_info: IProjectExtraInfo;

	id: number;
	ref: number;
	milestone: number | null;

	is_closed: boolean;

	created_date: string;
	modified_date: string;
	finish_date: string | null;

	subject: string;

	client_requirement: boolean;
	team_requirement: boolean;

	external_reference: string | null;

	version: number;

	is_blocked: boolean;
	blocked_note: string;
};
