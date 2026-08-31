import { Flex, Stack } from "@mantine/core";
import { SidebarKanban } from "./SidebarKanban";
import { Outlet } from "react-router-dom";

export default function KanbanLayout() {
	return (
		<Flex h="95vh" style={{ overflow: "hidden" }}>
			<SidebarKanban />
			<Stack style={{ flex: 1 }}>
				<Outlet />
			</Stack>
		</Flex>
	);
}
