import type { MyProject } from "../../../entities/project/model/projects.ts";
import { ProjectsList } from "../../../widgets/project-list/ui/ProjectList.tsx";
import { Container } from "@mantine/core";

const MOCK_PROJECTS: MyProject[] = [
	{
		id: "1",
		title: "Anor",
		description: "no",
		isPrivate: true,
		isFeatured: true,
		color: "#a38acb",
	},
	{
		id: "2",
		title: "Anor",
		description: "anor",
		isFeatured: true,
		color: "#8bd9a5",
	},
];

export function ProjectsPage() {
	return (
		<Container>
			<ProjectsList projects={MOCK_PROJECTS} />
		</Container>
	);
}
