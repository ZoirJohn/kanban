import { Divider, Stack, UnstyledButton, Group, Box, Text, Tooltip } from "@mantine/core";
import { RiArrowLeftSLine, RiArrowRightSLine, RiSearchLine, RiTeamLine } from "@remixicon/react";
import type { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
interface Propps {
	collapsed: boolean;
	setCollapsed: Dispatch<SetStateAction<boolean>>;
}
export function BottomSidebar({ collapsed, setCollapsed }: Propps) {
	const menuItems = [
		{
			label: "Search",
			icon: <RiSearchLine size={20} />,
		},
		{
			label: "Team",
			icon: <RiTeamLine size={20} />,
		},
	];
	const navigate = useNavigate();
	return (
		<Stack gap={4} p="xs" mt="auto">
			{menuItems.map((item) => (
				<Tooltip
					key={item.label}
					onClick={item.label == "Team" ? () => navigate("Team") : () => null}
					label={item.label}
					position="right"
					disabled={!collapsed}
				>
					<UnstyledButton
						p="xs"
						style={{
							borderRadius: 6,
							width: "100%",
						}}
					>
						<Group gap="sm" justify={collapsed ? "center" : "flex-start"} wrap="nowrap">
							<Box c="#d8dee9">{item.icon}</Box>

							{!collapsed && (
								<Text size="sm" c="#d8dee9">
									{item.label}
								</Text>
							)}
						</Group>
					</UnstyledButton>
				</Tooltip>
			))}
			<Divider color="#434c5e" my="xs" />
			<Tooltip label={collapsed ? "Expand menu" : "Collapse menu"} position="right">
				<UnstyledButton
					p="xs"
					onClick={() => setCollapsed((prev) => !prev)}
					style={{
						borderRadius: 6,
						width: "100%",
					}}
				>
					<Group gap="sm" justify={collapsed ? "center" : "flex-start"} wrap="nowrap">
						{collapsed ? (
							<RiArrowRightSLine size={20} color="#d8dee9" />
						) : (
							<RiArrowLeftSLine size={20} color="#d8dee9" />
						)}

						{!collapsed && (
							<Text size="sm" c="#d8dee9">
								Collapse menu
							</Text>
						)}
					</Group>
				</UnstyledButton>
			</Tooltip>
			<Divider color="#434c5e" my="xs" mb={30} />
		</Stack>
	);
}
