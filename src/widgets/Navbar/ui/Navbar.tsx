import { Link } from "react-router-dom";
import { Button, Flex, Image } from "@mantine/core";
import { RiFolder2Line } from "@remixicon/react";
import { useKanbanStore } from "../../../shared/store/store";
import logo from "../../../shared/assets/images/logo.svg";
import { useStore } from "zustand";
import { NavbarActions } from "./NavbarActions";
import { NavbarProfile } from "./NavbarProfile";
import { NavbarAuth } from "./NavbarAuth";
export const Navbar = () => {
	const token = useStore(useKanbanStore, (state) => state.tokens.access_token);
	return (
		<nav>
			<Flex py={4} px={8} bg={"#d8dee9"} align={"center"} justify={"space-between"}>
				<Flex align={"center"}>
					<Link className={"logo"} style={{ height: "37px", width: "35px" }} to={"/"}>
						<Image src={logo} />
					</Link>
					{token && (
						<Button
							size={"compact-xs"}
							variant={"subtle"}
							leftSection={<RiFolder2Line size={18} />}
						>
							Projects
						</Button>
					)}
				</Flex>
				<Flex align={"center"}>
					{token ? (
						<>
							<NavbarActions />
							<NavbarProfile />
						</>
					) : (
						<NavbarAuth />
					)}
				</Flex>
			</Flex>
		</nav>
	);
};
