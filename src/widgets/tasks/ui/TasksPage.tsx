import { Button, Flex, Grid, Paper, Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";

import { useTasks } from "@/entities/kanban/model/useTasks";
import { useKanban } from "@/entities/kanban/model/useKanban";
import { useUpdateBulk } from "@/entities/kanban/model/useUpdateDrop";
import type { RequestData } from "@/entities/kanban/model/DragType";
import Tasks from "@/entities/kanban/ui/Tasks";
export function TasksPage() {
	const { id } = useParams();
	const { data: idProject } = useKanban(id);
	const { data, isLoading } = useTasks(idProject?.id);
	const { mutate: updatePosition } = useUpdateBulk();
	const statuses = idProject?.us_statuses?.sort((a, b) => a.order - b.order) ?? [];
	const handleDragEnd = (result: DropResult) => {
		const { destination, source, draggableId } = result;
		console.log(result);

		if (!destination) return;
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}
		const taskId = Number(draggableId);
		const targetStatusId = Number(destination.droppableId);
		const columnTasks =
			data
				?.filter(
					(task) =>
						task.status === targetStatusId ||
						task.status_extra_info?.id === targetStatusId
				)
				.sort((e, c) => e.kanban_order - c.kanban_order) ?? [];
		const previousTask = columnTasks[destination.index - 1];
		const dropData: RequestData & { kanban_order?: number } = {
			project_id: Number(idProject?.id),
			status_id: targetStatusId,
			bulk_userstories: [taskId],
			after_userstory_id: previousTask ? previousTask.id : null,
		};
		updatePosition(dropData);
	};
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			{/* {openModal && <UserAddStore state={openModal} setState={setOpenModal} />} */}
			<Grid mt={16} gap={4} p={20}>
				{statuses.map((status) => {
					const tasks =
						data?.filter(
							(task) =>
								task.status === status.id ||
								task.status_extra_info?.id === status.id
						) ?? [];
					const taskData = tasks.sort((e, c) => e.kanban_order - c.kanban_order);
					return (
						<Grid.Col key={status.id} span={2}>
							<Paper bg="#d8dee9" px={12} py={6} mb={8}>
								<Flex align="center" justify="space-between">
									<Text size="xs" tt="uppercase" fw={700}>
										{status.name}
									</Text>
									<Button p={4} size="20" h="auto" bg="#d8dee9" c="black">
										+
									</Button>
								</Flex>
							</Paper>
							<Tasks taskData={taskData} type={String(status.id)} />
						</Grid.Col>
					);
				})}
			</Grid>
		</DragDropContext>
	);
}
