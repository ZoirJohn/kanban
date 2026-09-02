import {
	ActionIcon,
	Box,
	Button,
	Flex,
	Grid,
	Menu,
	Menubar,
	Paper,
	Stack,
	Text,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { useStoreAddForm } from "./FormAddStore";
import { RiAddLine, RiBarChartFill, RiCloseLargeLine } from "@remixicon/react";
interface Props {
	setState: () => void;
}
export function UserAddStore({ setState }: Props) {
	const storeAddForm = useStoreAddForm();
	return (
		<Flex
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 1000,
				width: "100vw",
				height: "100vh",
				backgroundColor: "rgba(255, 255, 255, 0.6)",
				backdropFilter: "blur(8px)",
				WebkitBackdropFilter: "blur(8px)",
			}}
			align="center"
			justify="space-between"
			direction="row"
			p={20}
		>
			<ActionIcon
				style={{ position: "absolute" }}
				top={10}
				right={10}
				onClick={() => setState(true)}
			>
				<RiCloseLargeLine />
			</ActionIcon>
			<Paper w={"700px"} mx="auto" style={{ borderRadius: 8 }} p={20} shadow="md">
				<Title order={3}>Add User</Title>
				<Grid mt={16} gap={4}>
					<Grid.Col span={8}>
						<Paper bg="#d8dee9" px={12} py={6} mb={8}>
							<form>
								<Stack gap={9}>
									<TextInput
										{...storeAddForm.getInputProps("subject")}
										placeholder="Subject"
										size="sm"
										radius={0}
									/>
									<Textarea
										{...storeAddForm.getInputProps("description")}
										placeholder="Description"
										size="sm"
										radius={0}
									></Textarea>
									<Flex
										bg="#eceff4"
										style={{ overflow: "hidden" }}
										align="center"
										gap={8}
										h={36}
									>
										<Box>
											<Text py={4} px={10}>
												Attachments
											</Text>
										</Box>

										<ActionIcon bg="#7ee4d8" h={36} w={36} radius={0} ml="auto">
											<RiAddLine />
										</ActionIcon>
									</Flex>
								</Stack>
							</form>
						</Paper>
					</Grid.Col>
					<Grid.Col span={4}>
						<Paper bg="#d8dee9" mb={8}>
							{/* <Flex align="center" justify="space-between" direction={"column"}> */}
							<Menubar w={"100%"} p={0} style={{ zIndex: 1001 }}>
								<Menubar.Menu>
									<Menubar.Target style={{ width: "100%" }}>
										<Button display={"flex"} justify="space-between" w={"100%"}>
											<Text>Help</Text>
											<RiBarChartFill />
										</Button>
									</Menubar.Target>
									<Menubar.Dropdown style={{ zIndex: 1001 }}>
										<Menu.Item>Documentation</Menu.Item>
										<Menu.Item>Keyboard shortcuts</Menu.Item>
										<Menu.Item>About</Menu.Item>
									</Menubar.Dropdown>
								</Menubar.Menu>
							</Menubar>
							{/* </Flex> */}
						</Paper>
					</Grid.Col>

					<Button
						type="submit"
						fullWidth
						h={32}
						radius={3}
						fw={400}
						c="#303344"
						bg="#7ee4d8"
					>
						REGISTER
					</Button>
				</Grid>
			</Paper>
		</Flex>
	);
}
