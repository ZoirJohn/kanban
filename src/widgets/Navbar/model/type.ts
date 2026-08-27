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
