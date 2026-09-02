import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Avatar, Box, Menu, Paper, ScrollArea, Stack, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { RiDeleteBinLine, RiEditLine, RiMore2Line, RiUserLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useTaskDelete } from "../model/useDeleteTask";
import type { ITask } from "../model/TasksType";

interface TaskProps {
	taskData: ITask[];
	type: string;
}

export default function Tasks({ taskData, type }: TaskProps) {
	const { mutate } = useTaskDelete();

	const handleDelete = (id: number | null) => {
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
			onConfirm: () => mutate(id),
		});
	};

	return (
		<Droppable droppableId={type}>
			{(provided, snapshot) => (
				<ScrollArea
					h="88vh"
					bg={snapshot.isDraggingOver ? "#c8d3e0" : "#d8dee9"}
					p={10}
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<Paper bg="transparent">
						{/* gap={10} orqali tasklar bir-biridan 10px oraliqda turadi */}
						<Stack p={4} gap={10}>
							{taskData.map((task, index) => {
								return (
									<Draggable
										key={task.id}
										draggableId={String(task.id)}
										index={index}
									>
										{(provided, snapshot) => (
											<Paper
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												bg="#fff"
												radius={4}
												px={4}
												style={{
													position: "relative",
													overflow: "hidden",
													// Sudrab ketayotganda kartochka ko'tarilib ko'rinishi uchun soya
													boxShadow: snapshot.isDragging
														? "0 8px 20px rgba(0,0,0,0.2)"
														: "0 1px 3px rgba(0,0,0,0.05)",
													...provided.draggableProps.style,
												}}
											>
												<Menu
													trigger="hover"
													openDelay={100}
													closeDelay={200}
													shadow="md"
													width={150}
													position="left-start"
												>
													<Menu.Target>
														<button
															className="bar"
															style={{
																position: "absolute",
																right: "4px",
																top: "6px",
																zIndex: 10,
																background: "none",
																border: "none",
																cursor: "pointer",
															}}
														>
															<RiMore2Line
																style={{
																	width: "16px",
																	height: "16px",
																}}
															/>
														</button>
													</Menu.Target>

													<Menu.Dropdown style={{ borderRadius: 4 }}>
														<Menu.Item
															leftSection={<RiEditLine size={16} />}
														>
															Edit
														</Menu.Item>
														<Menu.Item
															leftSection={<RiUserLine size={16} />}
														>
															Assign to
														</Menu.Item>
														<Menu.Item
															color="red"
															leftSection={
																<RiDeleteBinLine size={16} />
															}
															onClick={() => handleDelete(task.id)}
														>
															Delete
														</Menu.Item>
													</Menu.Dropdown>
												</Menu>

												<Box p={10} c="#2e3440">
													<Link
														to={`task/${task.id}`}
														style={{ textDecoration: "none" }}
													>
														<span
															style={{
																color: "#008aa8",
																fontSize: "14px",
																fontWeight: 500,
															}}
														>
															#{task.ref}
														</span>{" "}
														<span
															style={{
																color: "#2e3440",
																fontSize: "14px",
															}}
														>
															{task.subject}
														</span>
													</Link>
												</Box>

												<Box p={10} c="#2e3440">
													<Avatar
														title={
															task?.assigned_to_extra_info
																?.full_name_display
														}
														style={{
															fill: task.status_extra_info.color,
														}}
														src={`https://www.gravatar.com/avatar/${task.assigned_to_extra_info?.gravatar_id}?s=200&d=identicon`}
														size="sm"
														radius="xl"
													/>
												</Box>
											</Paper>
										)}
									</Draggable>
								);
							})}
							{provided.placeholder}
						</Stack>
					</Paper>
				</ScrollArea>
			)}
		</Droppable>
	);
}
