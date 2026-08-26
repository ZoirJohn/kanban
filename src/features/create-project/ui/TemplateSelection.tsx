import { Container, Title, Text, Stack, Box } from "@mantine/core";
import { TemplateCard } from "./TamplateCard.tsx";
import { TEMPLATES } from "../model/types.ts";

interface TemplateSelectionProps {
	onSelectTemplate?: (id: string) => void;
}

export const TemplateSelection = ({ onSelectTemplate }: TemplateSelectionProps) => {
	return (
		<Container size="sm" py={40}>
			<Stack align="center" gap="xs" mb={40}>
				<Title order={1} c="cyan.7" fw={600} size="h2">
					Create Project
				</Title>
				<Text c="dimmed" size="sm">
					Which template fits your project better?
				</Text>
			</Stack>

			<Box style={{ borderTop: "1px solid var(--mantine-color-gray-2)" }}>
				{TEMPLATES.map((option) => (
					<TemplateCard key={option.id} option={option} onSelect={onSelectTemplate} />
				))}
			</Box>
		</Container>
	);
};
