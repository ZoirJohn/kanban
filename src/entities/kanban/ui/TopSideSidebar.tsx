import { Stack, Text, UnstyledButton, Group, Tooltip, Avatar } from "@mantine/core";
import { useKanban } from "../model/useKanban";
import { RiKanbanView2 } from "@remixicon/react";
import { Link, useParams } from "react-router-dom";
interface TopProps {
	collapsed: boolean;
}
export function ToptSideSidebar({ collapsed }: TopProps) {
	const { id } = useParams();
	const { data } = useKanban(id);
	console.log(data);
	console.log(id);
	const mainAva = `https://tree.taiga.io/v-1778772818558/images/project-logos/project-logo-05.png`;

	return (
		<Stack gap={4} p="xs" style={{ background: "#2E3440" }}>
			<Tooltip label="Anor" position="right" disabled={!collapsed}>
				<UnstyledButton
					p="xs"
					style={{
						borderRadius: 6,
						width: "100%",
					}}
					component={Link}
					to=""
				>
					<Group gap="sm" justify={collapsed ? "center" : "flex-start"} wrap="nowrap">
						<Avatar
							h={32}
							radius={0}
							p={2}
							w={32}
							style={{ background: "rgb(152, 224, 168)" }}
							src={mainAva}
							alt="jadsf "
						/>

						{!collapsed && (
							<Text
								size="sm"
								c="#d8dee9"
								fw={500}
								styles={{
									root: {
										whiteSpace: "nowrap",
									},
								}}
							>
								{data?.name}
							</Text>
						)}
					</Group>
				</UnstyledButton>
			</Tooltip>

			<Tooltip label="Kanban" position="right" disabled={!collapsed}>
				<UnstyledButton
					p="xs"
					component={Link}
					to={"kanban"}
					style={{
						borderRadius: 6,
						width: "100%",
					}}
				>
					<Group gap="sm" justify={collapsed ? "center" : "flex-start"} wrap="nowrap">
						<RiKanbanView2 color="#d8dee9" size={32} />

						{!collapsed && (
							<Text
								size="sm"
								c="#d8dee9"
								fw={500}
								styles={{
									root: {
										whiteSpace: "nowrap",
									},
								}}
							>
								Kanban
							</Text>
						)}
					</Group>
				</UnstyledButton>
			</Tooltip>
		</Stack>
	);
}
