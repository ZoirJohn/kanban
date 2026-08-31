import { Avatar, Button, Loader, Menu } from "@mantine/core";
import { RiFocusMode, RiFolder2Line } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useKanbanStore } from "@/shared/store/store";
import { useStore } from "zustand";
import { IconPlus } from "@tabler/icons-react";
import { useProject } from "@/entities";
export function NavProjects() {
	const userId = useStore(useKanbanStore, (state) => state.userId);

	const { data, isLoading } = useProject(userId);
	console.log("kk data:", data);

	return (
		<Menu trigger="hover" openDelay={100} closeDelay={200} shadow="md" width={200}>
			<Menu.Target>
				<Button
					size={"compact-xs"}
					component={Link}
					to={"/projects/"}
					variant={"subtle"}
					leftSection={<RiFolder2Line size={18} />}
				>
					Projects
				</Button>
			</Menu.Target>

			<Menu.Dropdown style={{ borderRadius: "0" }}>
				{isLoading ? (
					<Menu.Item>
						<Loader height={30} w={100} />
					</Menu.Item>
				) : data && data.length > 0 ? (
					data?.map((e) => {
						const mainAva = `https://tree.taiga.io/v-1778772818558/images/project-logos/project-logo-05.png`;
						return (
							<Menu.Item
								component={Link}
								to={`/projects/${e.slug}/kanban`}
								leftSection={
									<Avatar bg={"rgb(152, 224, 168)"} radius={2} src={mainAva} />
								}
							>
								{e.name}
							</Menu.Item>
						);
					})
				) : (
					<Menu.Item leftSection={<RiFocusMode size={18} />}>Proektlar yo'q</Menu.Item>
				)}

				<Menu.Divider />

				<Button
					leftSection={<IconPlus size={16} />}
					bg="#66e0d0"
					c="gray.9"
					w={"100%"}
					radius={0}
					component={Link}
					to={"/projects/new/"}
					fw={600}
					styles={{
						root: {
							"&:hover": {
								backgroundColor: "#4cd3c1",
							},
						},
					}}
				>
					NEW PROJECT
				</Button>
			</Menu.Dropdown>
		</Menu>
	);
}
