import { Button, Stack } from "@mantine/core";

import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../entities/project/model/projects.ts";

export function ProfileSidebar() {
	return (
		<Stack gap={16} w={300} p="16px">
			{projects.map((project) => (
				<ProjectCard key={project.slug} project={project} />
			))}

			<Button h={31} radius={4} fw={400} fz={14} color="#72dfd0" c="#263746">
				MANAGE PROJECTS
			</Button>
		</Stack>
	);
}
