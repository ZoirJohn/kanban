export interface Owner {
	username: string;
	full_name_display: string;
	photo: string | null;
	big_photo: string | null;
	gravatar_id: string;
	is_active: boolean;
	id: number;
}

export interface Member {
	role: number;
	role_name: string;
	full_name: string;
	full_name_display: string;
	is_active: boolean;
	id: number;
	color: string;
	username: string;
	photo: string | null;
	gravatar_id: string;
}

export interface StatusBase {
	id: number;
	name: string;
	order: number;
	project_id: number;
	color: string;
}

export interface EpicStatus extends StatusBase {
	slug: string;
	is_closed: boolean;
}

export interface UsStatus extends StatusBase {
	is_closed: boolean;
	wip_limit: number | null;
	slug: string;
	is_archived: boolean;
}

export interface TaskStatus extends StatusBase {
	is_closed: boolean;
	slug: string;
}

export interface IssueStatus extends StatusBase {
	is_closed: boolean;
	slug: string;
}

export type IssueType = StatusBase;
export type Priority = StatusBase;
export type Severity = StatusBase;

export interface DueDate {
	id: number;
	name: string;
	order: number;
	by_default: boolean;
	color: string;
	days_to_due: number | null;
	project_id: number;
}

export interface Point {
	id: number;
	name: string;
	order: number;
	value: number | null;
	project_id: number;
}

export interface Role {
	id: number;
	name: string;
	slug: string;
	order: number;
	computable: boolean;
	project_id: number;
	permissions: string[];
}

export interface ProjectKanban {
	id: number;
	name: string;
	slug: string;
	description: string;
	created_date: string;
	modified_date: string;
	owner: Owner;
	members: Member[];
	total_milestones: number | null;
	total_story_points: number | null;
	is_contact_activated: boolean;
	is_epics_activated: boolean;
	is_backlog_activated: boolean;
	is_kanban_activated: boolean;
	is_wiki_activated: boolean;
	is_issues_activated: boolean;
	videoconferences: unknown | null;
	videoconferences_extra_data: unknown | null;
	creation_template: number;
	is_private: boolean;
	anon_permissions: string[];
	public_permissions: string[];
	is_featured: boolean;
	is_looking_for_people: boolean;
	looking_for_people_note: string;
	blocked_code: string | null;
	archived_code: string | null;
	totals_updated_datetime: string;
	total_fans: number;
	total_fans_last_week: number;
	total_fans_last_month: number;
	total_fans_last_year: number;
	total_activity: number;
	total_activity_last_week: number;
	total_activity_last_month: number;
	total_activity_last_year: number;
	tags: string[];
	tags_colors: Record<string, string>;
	default_epic_status: number;
	default_points: number;
	default_us_status: number;
	default_task_status: number;
	default_priority: number;
	default_severity: number;
	default_issue_status: number;
	default_issue_type: number;
	default_swimlane: number | null;
	my_permissions: string[];
	i_am_owner: boolean;
	i_am_admin: boolean;
	i_am_member: boolean;
	notify_level: number;
	total_closed_milestones: number;
	is_watcher: boolean;
	total_watchers: number;
	logo_small_url: string | null;
	logo_big_url: string | null;
	is_fan: boolean;
	my_homepage: boolean;
	epic_statuses: EpicStatus[];
	swimlanes: unknown | null;
	us_statuses: UsStatus[];
	us_duedates: DueDate[];
	points: Point[];
	task_statuses: TaskStatus[];
	task_duedates: DueDate[];
	issue_statuses: IssueStatus[];
	issue_types: IssueType[];
	issue_duedates: DueDate[];
	priorities: Priority[];
	severities: Severity[];
	epic_custom_attributes: unknown | null;
	userstory_custom_attributes: unknown | null;
	task_custom_attributes: unknown | null;
	issue_custom_attributes: unknown | null;
	roles: Role[];
	total_memberships: number;
	is_out_of_owner_limits: boolean;
	milestones: unknown[];
}
