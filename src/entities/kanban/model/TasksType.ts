export interface ITaskStatus {
	name: string;
	id: number;
	color: string;
	is_closed: boolean;
}

export interface IUserInfo {
	username: string;
	full_name_display: string;
	photo: string | null;
	big_photo: string | null;
	gravatar_id: string;
	is_active: boolean;
	id: number;
}

export interface IProjectInfo {
	name: string;
	slug: string;
	logo_small_url: string | null;
	id: number;
}

export interface ITask {
	due_date: string | null;
	due_date_reason: string;
	due_date_status: string;

	total_comments: number;
	tags: unknown[];
	attachments: unknown[];

	status: number;
	status_extra_info: ITaskStatus;

	assigned_to: number | null;
	assigned_to_extra_info: IUserInfo | null;

	owner: number;
	owner_extra_info: IUserInfo;

	is_watcher: boolean;
	total_watchers: number;

	is_voter: boolean;
	total_voters: number;

	project: number;
	project_extra_info: IProjectInfo;

	id: number;
	ref: number;

	milestone: number | null;
	milestone_slug: string | null;
	milestone_name: string | null;

	is_closed: boolean;

	points: Record<string, number>;

	backlog_order: number;
	sprint_order: number;
	kanban_order: number;

	created_date: string;
	modified_date: string;
	finish_date: string | null;

	subject: string;

	client_requirement: boolean;
	team_requirement: boolean;

	generated_from_issue: number | null;
	generated_from_task: number | null;
	from_task_ref: number | null;
	external_reference: string | null;
	tribe_gig: number | null;

	version: number;

	watchers: unknown[];

	is_blocked: boolean;
	blocked_note: string;

	total_points: number | null;
	comment: string;

	origin_issue: number | null;
	origin_task: number | null;

	epics: unknown;
	epic_order: number | null;

	tasks: ITask[];

	total_attachments: number;

	swimlane: number | null;

	assigned_users: number[];
}
