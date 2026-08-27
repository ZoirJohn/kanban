import { ActionIcon, Flex, Menu } from "@mantine/core";
import {
	RiCompass3Line,
	RiQuestionLine,
	RiNotification3Line,
	RiBubbleChartFill,
} from "@remixicon/react";
import { Link } from "react-router";

export const NavbarActions = () => {
	return (
		<Flex justify="space-between" gap={22}>
			<Link to={"/discover"} title="Discover trending projects">
				<ActionIcon variant="transparent" size="lg" color="#008aa8" aria-label="Catalog">
					<RiCompass3Line style={{ width: "70%", height: "70%" }} />
				</ActionIcon>
			</Link>

			<Menu trigger="hover" openDelay={100} closeDelay={200} shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon
						variant="transparent"
						color="#008aa8"
						size="lg"
						aria-label="Community"
					>
						<RiQuestionLine style={{ width: "70%", height: "70%" }} />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Link to="https://community.taiga.io/">
						<Menu.Label>
							<Flex c="blue" align={"#008AA8"} gap={4}>
								<RiBubbleChartFill /> Taiga Comminity
							</Flex>
						</Menu.Label>
					</Link>
				</Menu.Dropdown>
			</Menu>
			<ActionIcon variant="transparent" color="#008aa8" size="lg" aria-label="Notifications">
				<RiNotification3Line style={{ width: "70%", height: "70%" }} />
			</ActionIcon>
		</Flex>
	);
};
