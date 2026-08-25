import { Container, Grid, Stack, Text, Title } from "@mantine/core";
import { ProjectEmptyState } from "../../../entities/project/ui/ProjectEmptyStateProps.tsx";
import { DashboardSkeleton } from "../../../shared/ui/DashboardSkeleton.tsx";

export function ProjectsDashboard() {
	return (
		<Container size="xl" py={0}>
			<Title order={2} c="cyan.7" mb={18} fw={500}>
				Projects Dashboard
			</Title>

			<Grid>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<DashboardColumn title="Working on">
						<ProjectEmptyState
							title="It feels empty, doesn't it?"
							description="Start working with Taiga and you'll see here the stories, tasks and issues you are working on."
						/>
						<DashboardSkeleton />
					</DashboardColumn>
				</Grid.Col>

				<Grid.Col span={{ base: 12, md: 6 }}>
					<DashboardColumn title="Watching">
						<ProjectEmptyState
							title="Follow user stories, tasks, issues in your projects"
							description="and be notified about their changes :)"
						/>
						<DashboardSkeleton />
					</DashboardColumn>
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
