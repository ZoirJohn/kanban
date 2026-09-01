export type User = {
	id: number;
	name: string;
	photo: string | null;
	big_photo: string | null;
	gravatar_id: string;
	username: string;
	is_profile_visible: boolean;
	date_joined: string;
};

export type Project = {
	id: number;
	name: string;
	slug: string;
	description: string;
};

export type Userstory = {
	id: number;
	ref: number;
	subject: string;
};

export type ValuesDiff = {
	assigned_users: string[];
};

export type ActivityData = {
	user: User;
	comment: string;
	project: Project;
	userstory: Userstory;
	values_diff: ValuesDiff;
	comment_html: string;
};

export type Activity = {
	id: number;
	content_type: number;
	object_id: number;
	namespace: string;
	event_type: string;
	project: number;
	data_content_type: number;
	created: string;
	data: ActivityData;
};
