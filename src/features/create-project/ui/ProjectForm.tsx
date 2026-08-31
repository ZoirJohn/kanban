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
import { useForm } from "@mantine/form";
import { IconKey, IconWorld } from "@tabler/icons-react";
import type { ICreateProject } from "../model/types";
import { useCreateKanbanProject } from "../model/useCreateKanbanProject";

export const ProjectForm = () => {
	const { mutate, isPending } = useCreateKanbanProject();
	const form = useForm<ICreateProject>({
		initialValues: {
			name: "",
			description: "",
			is_private: true,
			creation_template: 2,
		},

		validate: {
			name: (value) => (value.trim().length === 0 ? "Project name is required" : null),

			description: (value) =>
				value.trim().length === 0 ? "Project description is required" : null,
		},
	});

	const handleSubmit = (values: ICreateProject) => {
		console.log(values);
		mutate(values);
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack maw={760} mx="auto" mt={20} gap="md">
				<Stack align="center" gap={2}>
					<Title order={2} c="#0789a6">
						▥ Kanban
					</Title>

					<Text c="dimmed">Keep a constant workflow on independent tasks</Text>
				</Stack>

				<Stack gap={5} mt={15}>
					<Text c="#68708f">New project details</Text>

					<TextInput
						placeholder="Project Name (Required)"
						size="md"
						{...form.getInputProps("name")}
					/>

					<Textarea
						placeholder="Project Description (Required)"
						size="md"
						minRows={7}
						autosize={false}
						{...form.getInputProps("description")}
					/>
				</Stack>

				<SegmentedControl
					fullWidth
					data={[
						{
							value: false,
							label: (
								<Group justify="center" gap={8}>
									<IconWorld size={17} />
									<span>PUBLIC PROJECT</span>
								</Group>
							),
						},
						{
							value: true,
							label: (
								<Group justify="center" gap={8}>
									<IconKey size={17} />
									<span>PRIVATE PROJECT</span>
								</Group>
							),
						},
					]}
					{...form.getInputProps("is_private")}
				/>

				<Group grow mt={25}>
					<Button type="button" variant="light" color="gray">
						BACK
					</Button>

					<Button type="submit" loading={isPending}>
						CREATE PROJECT
					</Button>
				</Group>
			</Stack>
		</form>
	);
};
