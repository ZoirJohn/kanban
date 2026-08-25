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
