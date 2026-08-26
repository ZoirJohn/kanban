import { Group, Stack, Text } from "@mantine/core";
import { IconEye, IconHeart, IconKey, IconUsers, IconCircleCheckFilled } from "@tabler/icons-react";
import type { Project } from "../../../entities/project/model/projects.ts";
import { ProjectAvatar } from "../../../shared/ui/ProjectAvatar.tsx";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Stack
			gap={4}
			p="16px"
			style={{
				border: "1px solid #d8dce8",
				width: "100%",
			}}
		>
			<Group gap="8px" align="center">
				<ProjectAvatar color={project.color} />

				<Group gap={5} align="center">
					<Text size="18px" c="#526078">
						{project.name}
					</Text>

					<IconCircleCheckFilled size={16} color="#0796ae" />
				</Group>
			</Group>

			<Text size="14px" c="#526078">
				{project.slug}
			</Text>

			<Group gap="8px" c="#526078" mt={16}>
				<Group gap={3}>
					<IconHeart size={15} />
					<Text size="13px">{project.likes}</Text>
				</Group>

				<Group gap={3}>
					<IconEye size={15} />
					<Text size="13px">{project.watchers}</Text>
				</Group>

				{project.members !== undefined && (
					<Group gap={3}>
						<IconUsers size={15} />
						<Text size="13px">{project.members}</Text>
					</Group>
				)}

				{project.tasks !== undefined && (
					<Group gap={3}>
						<IconKey size={15} />
						<Text size="13px">{project.tasks}</Text>
					</Group>
				)}
			</Group>
		</Stack>
	);
}
