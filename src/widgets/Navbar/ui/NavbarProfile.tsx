import { ActionIcon, Avatar, Flex, Menu } from "@mantine/core";
import {
	RiArrowDropDownLine,
	RiUserLine,
	RiSettings3Line,
	RiLogoutBoxRLine,
} from "@remixicon/react";
import { Link, useNavigate } from "react-router";
import { useKanbanStore } from "../../../shared/store/store";
import { useStore } from "zustand";
import { useProfile } from "../model/useProfile";
export const NavbarProfile = () => {
	const logout = useStore(useKanbanStore, (d) => d.logout);
	const userId = useStore(useKanbanStore, (state) => state.userId);
	const navigate = useNavigate();
	const { isLoading, data: profile } = useProfile(userId);
	if (isLoading) {
		return <div>loading...</div>;
	}
	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<Menu trigger="hover" openDelay={100} closeDelay={200} shadow="md" width={200}>
			<Menu.Target>
				<Flex
					style={{
						borderLeft: "1px solid #fff",
						cursor: "pointer",
					}}
					px="sm"
					ml="1rem"
					align="center"
				>
					<Avatar src={profile?.photo} />

					<ActionIcon
						variant="transparent"
						color="#008aa8"
						size="lg"
						aria-label="Profile menu"
					>
						<RiArrowDropDownLine
							style={{
								width: "70%",
								height: "70%",
							}}
						/>
					</ActionIcon>
				</Flex>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Account</Menu.Label>

				<Menu.Item component={Link} to="/profile" leftSection={<RiUserLine size={18} />}>
					Paid plans
				</Menu.Item>

				<Menu.Item
					component={Link}
					to="/settings"
					leftSection={<RiSettings3Line size={18} />}
				>
					Accaunt settings
				</Menu.Item>

				<Menu.Divider />

				<Menu.Item
					color="red"
					leftSection={<RiLogoutBoxRLine size={18} />}
					onClick={() => handleLogout()}
				>
					Log out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};
