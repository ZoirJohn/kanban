import { Avatar, Box, Flex, Group, Stack, Text } from "@mantine/core";
import { IconBadge, IconKey } from "@tabler/icons-react";
import type { IProject } from "@/widgets/Navbar/model/type";
import { RiEyeFill, RiHeart2Fill, RiUser3Fill } from "@remixicon/react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
	project: IProject;
}

export const DashboardProjectCard = ({ project }: ProjectCardProps) => {
	const initials = project.name.slice(0, 2).toUpperCase();

	return (
		<Box
			p="md"
			component={Link}
			to={"/projects/" + project.slug + "/kanban"}
			style={{
				borderRadius: 6,
				transition: "background-color 0.15s ease",
				width: "100%",
			}}
			onMouseEnter={(event) => {
				event.currentTarget.style.backgroundColor = "var(--mantine-color-gray-0)";
			}}
			onMouseLeave={(event) => {
				event.currentTarget.style.backgroundColor = "transparent";
			}}
		>
			<Group wrap="nowrap" gap={3} align="center">
				<Avatar
					src={project.logo_small_url}
					alt={project.name}
					c={"red"}
					radius={0}
					size={48}
					// color={project. || "teal"}
				>
					{initials}
				</Avatar>

				<Stack gap={2} style={{ flex: 1 }}>
					<Group gap={6} align="center">
						<Text fw={500} size="lg" c="#4c566a" style={{ textDecoration: "none" }}>
							{project.name}
						</Text>

						{project.is_private && (
							<IconKey size={16} color="var(--mantine-color-gray-6)" />
						)}

						{project.is_featured && (
							<IconBadge size={16} color="var(--mantine-color-teal-6)" />
						)}
					</Group>
				</Stack>
			</Group>
			<Text size="sm" c="dimmed" lineClamp={2}>
				{project.description}
			</Text>
			<Flex c={"dimmed"} align={"center"} gap={12} mt="20">
				<Flex align={"center"} gap={4}>
					<RiHeart2Fill size={15} />
					{project.total_activity}
				</Flex>
				<Flex align={"center"}>
					<RiEyeFill size={15} />
					{project.total_watchers}
				</Flex>
				<Flex align={"center"}>
					<RiUser3Fill size={15} />
					{project.total_fans}
				</Flex>
			</Flex>
		</Box>
	);
};
