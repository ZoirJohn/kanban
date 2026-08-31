import { BottomSidebar, ToptSideSidebar } from "@/entities";
import { Flex } from "@mantine/core";
import { useState } from "react";

export function SidebarKanban() {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Flex
			w={collapsed ? 64 : 250}
			h="100vh"
			justify={"space-between"}
			bg="#2e3440"
			style={{
				borderRight: "1px solid #434c5e",
				display: "flex",
				flexDirection: "column",
				transition: "width 200ms ease",
				// overflow: "hidden",
			}}
		>
			<ToptSideSidebar collapsed={collapsed} />
			<BottomSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
		</Flex>
	);
}
