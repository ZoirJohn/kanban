import { ActionIcon, Flex } from "@mantine/core";
import { RiCompass3Line, RiQuestionLine, RiNotification3Line } from "@remixicon/react";

export const NavbarActions = () => {
	return (
		<Flex justify={"space-between"} gap={22}>
			<ActionIcon variant="transparent" size="lg" color={"#008aa8"} aria-label="Settings">
				<RiCompass3Line style={{ width: "70%", height: "70%" }} />
			</ActionIcon>
			<ActionIcon variant="transparent" color={"#008aa8"} size="lg" aria-label="Settings">
				<RiQuestionLine style={{ width: "70%", height: "70%" }} />
			</ActionIcon>
			<ActionIcon variant="transparent" color={"#008aa8"} size="lg" aria-label="Settings">
				<RiNotification3Line style={{ width: "70%", height: "70%" }} />
			</ActionIcon>
		</Flex>
	);
};
