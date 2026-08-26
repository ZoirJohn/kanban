import { UnstyledButton, Group, Stack, Text, Tooltip, ActionIcon, Box } from "@mantine/core";
import { IconHelp } from "@tabler/icons-react";
import type { TemplateOption } from "../model/types.ts";

interface TemplateCardProps {
	option: TemplateOption;
	onSelect?: (id: string) => void;
}

export const TemplateCard = ({ option, onSelect }: TemplateCardProps) => {
	const IconComponent = option.icon;

	return (
		<UnstyledButton
			onClick={() => onSelect?.(option.id)}
			py="lg"
			px="xs"
			style={{ width: "100%", borderBottom: "1px solid var(--mantine-color-gray-2)" }}
		>
			<Group wrap="nowrap" align="flex-start" gap="md">
				<Box pt={2}>
					<IconComponent size={32} stroke={1.5} color="var(--mantine-color-gray-8)" />
				</Box>

				<Stack gap={4} style={{ flex: 1 }}>
					<Text fw={700} size="sm" tt="uppercase" c="gray.8">
						{option.title}
					</Text>
					<Text size="sm" c="dimmed">
						{option.description}
					</Text>
				</Stack>

				{option.tooltip && (
					<Tooltip label={option.tooltip} position="top" withArrow>
						<ActionIcon variant="subtle" color="gray" size="sm">
							<IconHelp size={18} stroke={1.5} />
						</ActionIcon>
					</Tooltip>
				)}
			</Group>
		</UnstyledButton>
	);
};
