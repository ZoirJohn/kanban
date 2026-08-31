import { Box, Button, Flex, Grid, Paper, ScrollArea, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const TASK_TYPES = ["new", "ready", "in progress", "ready for test", "done", "archived"];

export function TasksPage() {
	return (
		<Grid mt={16} gap={4} p={20}>
			{TASK_TYPES.map((type) => {
				return (
					<Grid.Col span={2}>
						<Paper bg={"#d8dee9"} px={12} py={6} mb={8}>
							<Flex align={"center"} justify={"space-between"}>
								<Text size={"xs"} order={3} tt={"uppercase"} fw={700}>
									{type}
								</Text>
								<Button p={4} size={"20"} h={"auto"} bg={"#d8dee9"} c={"black"}>
									+
								</Button>
							</Flex>
						</Paper>
						<ScrollArea>
							<Paper bg={"#d8dee9"}>
								<Stack mih={"88vh"} p={4} gap={4}>
									<Paper bg={"#fff"}>
										<Box p={4}>
											<Link to={"task"}>task</Link>
										</Box>
									</Paper>
								</Stack>
							</Paper>
						</ScrollArea>
					</Grid.Col>
				);
			})}
		</Grid>
	);
}
