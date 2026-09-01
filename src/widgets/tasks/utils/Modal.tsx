import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";

export const openDeleteModal = (id: number, deleteTask: (id: number) => void) =>
	modals.openConfirmModal({
		title: "Delete your task",
		centered: true,
		children: (
			<Text size="sm">
				Are you sure you want to delete this task? This action is destructive.
			</Text>
		),
		labels: { confirm: "Delete", cancel: "Cancel" },
		confirmProps: { color: "red" },
		onCancel: () => console.log("Cancel"),
		onConfirm: () => deleteTask(id),
	});
