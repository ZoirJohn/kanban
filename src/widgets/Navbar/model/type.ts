export interface IUser {
	id: number;
	username: string;
	full_name: string;
	full_name_display: string;
	color: string;
	bio: string;
	lang: string;
	theme: string;
	timezone: string;
	photo: string;
	is_active: boolean;
	gravatar_id: string;
	roles: string[];
}

export interface IProjectOwner {
	username: string;
	full_name_display: string;
	photo: string | null;
	big_photo: string | null;
	gravatar_id: string;
	is_active: boolean;
	id: number;
}

export interface IProject {
	id: number;
	name: string;
	slug: string;
	description: string;
	created_date: string;
	modified_date: string;

	owner: IProjectOwner;
	members: number[];

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
	is_watcher: boolean;

	total_watchers: number;

	logo_small_url: string | null;

	is_fan: boolean;

	my_homepage: string;
}
