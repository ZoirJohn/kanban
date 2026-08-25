export interface Project {
	name: string;
	slug: string;
	color: string;
	likes: number;
	watchers: number;
	members?: number;
	tasks?: number;
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
