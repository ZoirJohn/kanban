import { Paper, Group, Title, Button, Grid, Stack, Text, Divider } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import type { MyProject } from "../../../entities/project/model/projects.ts";
import { ProjectCard } from "../../../entities/project/ui/project-card/ProjectCard.tsx";
import { Link } from "react-router-dom";

interface ProjectsListProps {
	projects: MyProject[];
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
	return (
		<Stack p="md">
			<Paper bg="#f2f4f8" p="md" radius={0}>
				<Group justify="space-between" align="center">
					<Title order={3} c="teal.8" fw={400}>
						My projects
					</Title>
					<Link to="/projects/new/">
						<Button
							leftSection={<IconPlus size={16} />}
							bg="#66e0d0"
							c="gray.9"
							radius={0}
							fw={600}
							styles={{
								root: {
									"&:hover": {
										backgroundColor: "#4cd3c1",
									},
								},
							}}
						>
							NEW PROJECT
						</Button>
					</Link>
				</Group>
			</Paper>

			<Grid>
				<Grid.Col span={{ base: 12, md: 9 }}>
					<Stack gap={0}>
						{projects.map((project, index) => (
							<Stack gap={0} key={project.id}>
								<ProjectCard project={project} />
								{index < projects.length - 1 && <Divider color="gray.2" />}
							</Stack>
						))}
					</Stack>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 3 }}>
					<Text size="xs" c="dimmed">
						Reorder your projects to set at the top the most used ones. The top 4
						projects will appear in the top navigation bar project list
					</Text>
				</Grid.Col>
			</Grid>
		</Stack>
	);
};
