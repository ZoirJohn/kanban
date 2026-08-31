import {
	ActionIcon,
	Box,
	Button,
	Flex,
	Grid,
	Menu,
	Paper,
	ScrollArea,
	Stack,
	Text,
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";

import { useTasks } from "@/entities/kanban/model/useTasks";
import { useKanban } from "@/entities/kanban/model/useKanban";
import { RiDeleteBinLine, RiEditLine, RiMore2Line, RiUserLine } from "@remixicon/react";

const TASK_TYPES = ["new", "ready", "in progress", "ready for test", "done", "archived"];

export function TasksPage() {
	const { id } = useParams();
	const { data: idProject } = useKanban(id);
	const { data, isLoading } = useTasks(idProject?.id);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("tasklar:", data);

	return (
		<Grid mt={16} gap={4} p={20}>
			{TASK_TYPES.map((type) => {
				const tasks =
					data?.filter((task) => task.status_extra_info.name.toLowerCase() === type) ??
					[];
				const taskData = tasks.sort((e, c) => e.kanban_order - c.kanban_order);

				return (
					<Grid.Col key={type} span={2}>
						<Paper bg="#d8dee9" px={12} py={6} mb={8}>
							<Flex align="center" justify="space-between">
								<Text size="xs" order={3} tt="uppercase" fw={700}>
									{type}
								</Text>

								<Button p={4} size="20" h="auto" bg="#d8dee9" c="black">
									+
								</Button>
							</Flex>
						</Paper>

						<ScrollArea h="88vh" bg="#d8dee9">
							<Paper bg="transparent">
								<Stack p={4} gap={4}>
									{taskData.map((task) => (
										<Paper
											key={task.id}
											bg="#fff"
											radius={0}
											draggable
											style={{ position: "relative" }}
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
													<ActionIcon
														variant="subtle"
														aria-label="Settings"
														style={{
															position: "absolute",
															right: "1px",
															top: "1px",
														}}
													>
														<RiMore2Line
															style={{
																width: "70%",
																height: "70%",
															}}
														/>
													</ActionIcon>
												</Menu.Target>

												<Menu.Dropdown
													style={{
														borderRadius: 0,
													}}
												>
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
														leftSection={<RiDeleteBinLine size={16} />}
													>
														Delete
													</Menu.Item>
												</Menu.Dropdown>
											</Menu>

											<Box p={8} c="#2e3440">
												<Link to={`task/${task.id}`}>
													<span style={{ color: "#008aa8" }}>
														#{task.ref}
													</span>{" "}
													<span style={{ color: "#2e3440" }}>
														{task.subject}
													</span>
												</Link>
											</Box>
										</Paper>
									))}
								</Stack>
							</Paper>
						</ScrollArea>
					</Grid.Col>
				);
			})}
		</Grid>
	);
}
