import { Avatar, Box, Group, Stack, Text } from "@mantine/core";
import { IconBadge, IconKey } from "@tabler/icons-react";
import type { MyProject } from "../../model/projects.ts";

interface ProjectCardProps {
	project: MyProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const initials = project.title.slice(0, 2).toUpperCase();

	return (
		<Box
			p="sm"
			style={{
				borderRadius: 6,
				transition: "background-color 0.15s ease",
			}}
			onMouseEnter={(event) => {
				event.currentTarget.style.backgroundColor = "var(--mantine-color-gray-0)";
			}}
			onMouseLeave={(event) => {
				event.currentTarget.style.backgroundColor = "transparent";
			}}
		>
			<Group wrap="nowrap" align="flex-start">
				<Avatar
					src={project.avatarUrl}
					alt={project.title}
					radius={0}
					size={48}
					color={project.color || "teal"}
				>
					{initials}
				</Avatar>

				<Stack gap={2} style={{ flex: 1 }}>
					<Group gap={6} align="center">
						<Text
							component="a"
							href="#"
							fw={500}
							size="md"
							c="teal.8"
							style={{ textDecoration: "none" }}
						>
							{project.title}
						</Text>

						{project.isPrivate && (
							<IconKey size={16} color="var(--mantine-color-gray-6)" />
						)}

						{project.isFeatured && (
							<IconBadge size={16} color="var(--mantine-color-teal-6)" />
						)}
					</Group>

					<Text size="sm" c="dimmed" lineClamp={2}>
						{project.description}
					</Text>
				</Stack>
			</Group>
		</Box>
	);
};
