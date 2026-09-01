import { ActionIcon, Avatar, Button, Flex, Group, Paper, Text, Title } from "@mantine/core";
import { RiEyeLine, RiHeartLine, RiMailLine } from "@remixicon/react";

export function HeadTimeline() {
	return (
		<Flex w={"100%"} justify={"space-between"} align={"start"}>
			<Flex gap={15}>
				<Avatar
					h={"100px"}
					w={"100px"}
					src={
						"https://media-protected.taiga.io/user/d/d/8/a/de4fe733d54fb8dd399cd86c6ce970282002954e9ca0a781c2ee248493f3/gigachad.jpg.80x80_q85_crop.jpg?token=apVtsQ%3AIl4QVcduo6ld7ktLTFUJRMroA15HApDC4e5hCStdGQtqiP3NpvlPI6Pyt3OnIDslFuND-GQ9eqpsG4gMVIF29A"
					}
					radius={0}
				/>
				<Paper>
					<Title>Anor</Title>
					<Text>anor</Text>
				</Paper>
			</Flex>
			<Flex align={"center"} gap={5}>
				<Group gap={0}>
					<Button
						bg={"#eceff4"}
						variant="default"
						leftSection={<RiHeartLine size={18} />}
						styles={{
							root: {
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,
							},
						}}
					>
						Like
					</Button>

					<Button
						variant="default"
						px={10}
						styles={{
							root: {
								borderLeft: 0,
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
							},
						}}
						bg={"#d8dee9"}
					>
						0
					</Button>
				</Group>
				<Group gap={0}>
					<Button
						bg={"rgba(0,138,168,.3)"}
						variant="default"
						leftSection={<RiEyeLine size={18} />}
						styles={{
							root: {
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,
							},
						}}
					>
						Watching
					</Button>

					<Button
						variant="default"
						px={10}
						bg={"rgba(0,138,168,.5)"}
						styles={{
							root: {
								borderLeft: 0,
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
							},
						}}
					>
						0
					</Button>
				</Group>
				<ActionIcon variant="subtle">
					<RiMailLine />
				</ActionIcon>
			</Flex>
		</Flex>
	);
}
