import { Stack, Text } from "@mantine/core";

interface ProjectEmptyStateProps {
	title: string;
	description: string;
}

export function ProjectEmptyState({ title, description }: ProjectEmptyStateProps) {
	return (
		<Stack align="center" justify="center" gap={4} py={30} ta="center">
			<Text fw={700} size="md">
				{title}
			</Text>

			<Text size="md" maw={360} lh={1.45}>
				{description}
			</Text>
		</Stack>
	);
}
