import { ActionIcon, Avatar, Flex } from "@mantine/core";
import { RiArrowDropDownLine } from "@remixicon/react";

export const NavbarProfile = () => {
	return (
		<Flex style={{ borderLeft: "1px solid #fff" }} px={"sm"} ml={"1rem"}>
			<Avatar src={""} />
			<ActionIcon variant="transparent" color={"#008aa8"} size="lg" aria-label="Settings">
				<RiArrowDropDownLine style={{ width: "70%", height: "70%" }} />
			</ActionIcon>
		</Flex>
	);
};
