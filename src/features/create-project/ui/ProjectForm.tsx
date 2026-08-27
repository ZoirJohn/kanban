import {
	Button,
	Group,
	SegmentedControl,
	Stack,
	Text,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { IconKey, IconWorld } from "@tabler/icons-react";
import { useState } from "react";

export const ProjectForm = () => {
	const [visibility, setVisibility] = useState("public");

	return (
		<Stack maw={760} mx="auto" mt={20} gap="md">
			<Stack align="center" gap={2}>
				<Title order={2} c="#0789a6">
					▥ Kanban
				</Title>
				<Text c="dimmed">Keep a constant workflow on independent tasks</Text>
			</Stack>

			<Stack gap={5} mt={15}>
				<Text c="#68708f">New project details</Text>

				<TextInput placeholder="Project Name (Required)" size="md" />

				<Textarea
					placeholder="Project Description (Required)"
					size="md"
					minRows={7}
					autosize={false}
				/>
			</Stack>

			<SegmentedControl
				fullWidth
				value={visibility}
				onChange={setVisibility}
				data={[
					{
						value: "public",
						label: (
							<Group justify="center" gap={8}>
								<IconWorld size={17} />
								<span>PUBLIC PROJECT</span>
							</Group>
						),
					},
					{
						value: "private",
						label: (
							<Group justify="center" gap={8}>
								<IconKey size={17} />
								<span>PRIVATE PROJECT</span>
							</Group>
						),
					},
				]}
			/>
			<Group grow mt={25}>
				<Button variant="light" color="gray">
					BACK
				</Button>

				<Button disabled>CREATE PROJECT</Button>
			</Group>
		</Stack>
	);
};
