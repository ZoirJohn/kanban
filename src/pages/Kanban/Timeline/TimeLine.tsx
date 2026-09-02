import { TimelineHead, TimeLineLIst } from "@/widgets";
import { Flex } from "@mantine/core";

export function TimeLine() {
	return (
		<Flex w={"80%"} mx="auto" direction={"column"} p={20}>
			<TimelineHead />
			<TimeLineLIst />
		</Flex>
	);
}
