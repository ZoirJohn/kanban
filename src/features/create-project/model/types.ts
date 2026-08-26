import React from "react";
import {
	IconColumns,
	IconCopy,
	type IconProps,
	IconRotateClockwise,
	IconUpload,
} from "@tabler/icons-react";

export interface TemplateOption {
	id: string;
	title: string;
	description: string;
	icon: React.ComponentType<IconProps>;
	tooltip?: string;
}

export const TEMPLATES: TemplateOption[] = [
	{
		id: "scrum",
		title: "Scrum",
		description: "Prioritize and solve your tasks in short time cycles.",
		icon: IconRotateClockwise,
		tooltip: "More info about Scrum template",
	},
	{
		id: "kanban",
		title: "Kanban",
		description: "Keep a constant workflow on independent tasks",
		icon: IconColumns,
		tooltip: "More info about Kanban template",
	},
	{
		id: "duplicate",
		title: "Duplicate Project",
		description: "Start clean and keep your configuration",
		icon: IconCopy,
	},
	{
		id: "import",
		title: "Import Project",
		description: "Import your project from multiple platforms into Taiga",
		icon: IconUpload,
	},
];
