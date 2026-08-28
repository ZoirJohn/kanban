import { Link } from "react-router-dom";
import { Flex, Image } from "@mantine/core";
import { useKanbanStore } from "../../../shared/store/store";
import logo from "../../../shared/assets/images/logo.svg";
import { useStore } from "zustand";
import { NavbarActions } from "./NavbarActions";
import { NavbarProfile } from "./NavbarProfile";
import { NavbarAuth } from "./NavbarAuth";
import { NavProjects } from "./NavProjects";
export const Navbar = () => {
	const token = useStore(useKanbanStore, (state) => state.tokens.access_token);
	return (
		<nav>
			<Flex py={4} px={8} bg={"#d8dee9"} align={"center"} justify={"space-between"}>
				<Flex align={"center"}>
					<Link className={"logo"} style={{ height: "37px", width: "35px" }} to={"/"}>
						<Image src={logo} />
					</Link>
					{token && <NavProjects />}
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
