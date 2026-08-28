import { Button, Container, Flex, Grid, Loader, Stack, Text, Title } from "@mantine/core";
import { ProjectEmptyState } from "../../../entities/project/ui/ProjectEmptyStateProps.tsx";
import { DashboardSkeleton } from "../../../shared/ui/DashboardSkeleton.tsx";
import { useProject } from "@/entities/index.ts";
import { useStore } from "zustand";
import { useKanbanStore } from "@/shared/store/store.ts";
import { DashboardProjectCard } from "@/entities/project/ui/project-card/DashboardProjectCard.tsx";
import { IconPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { DashboardTaskProject } from "@/entities";
import { useUserStory } from "@/entities/user/model/useUserStories.ts";

export function ProjectsDashboard() {
	const userId = useStore(useKanbanStore, (state) => state.userId);

	const { data: projectData, isLoading: projectLoad } = useProject(userId);
	const { data: storyData = [], isLoading: loadingStory } = useUserStory(userId);
	return (
		<Container size="xl" py={0}>
			<Title order={2} c="cyan.7" mb={18} fw={500}>
				Projects Dashboard
			</Title>

			<Grid>
				<Grid.Col span={{ base: 12, md: 4.5 }}>
					<DashboardColumn title="Working on">
						{storyData.length > 0 ? (
							<DashboardTaskProject duties={storyData} />
						) : (
							<ProjectEmptyState
								title="It feels empty, doesn't it?"
								description="Start working with Taiga and you'll see here the stories, tasks and issues you are working on."
							/>
						)}
						{loadingStory && <DashboardSkeleton />}
					</DashboardColumn>
				</Grid.Col>

				<Grid.Col span={{ base: 12, md: 4.5 }}>
					<DashboardColumn title="Watching">
						<ProjectEmptyState
							title="Follow user stories, tasks, issues in your projects"
							description="and be notified about their changes :)"
						/>
						<DashboardSkeleton />
					</DashboardColumn>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 3 }}>
					<Flex h="100%" direction={"column"} gap={10}>
						{projectLoad ? (
							<Loader />
						) : (
							projectData?.map((e) => (
								<Flex style={{ border: "1px solid rgba(92,186,169,.2)" }}>
									<DashboardProjectCard key={e.id} project={e} />
								</Flex>
							))
						)}
						<Button
							leftSection={<IconPlus size={16} />}
							bg="#66e0d0"
							c="gray.9"
							w={"100%"}
							radius={0}
							component={Link}
							to={"/projects/new/"}
							fw={600}
							styles={{
								root: {
									"&:hover": {
										backgroundColor: "#4cd3c1",
									},
								},
							}}
						>
							MANAGE PROJECT
						</Button>
					</Flex>
				</Grid.Col>
			</Grid>
		</Container>
	);
}

interface DashboardColumnProps {
	title: string;
	children: React.ReactNode;
}

function DashboardColumn({ title, children }: DashboardColumnProps) {
	return (
		<Stack gap={0}>
			<Text px={16} py={10} size="lg" c="cyan.7" bg="gray.1">
				{title}
			</Text>

			{children}
		</Stack>
	);
}
