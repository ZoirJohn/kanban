import { Flex } from "@mantine/core";
import { Link } from "react-router-dom";

export const NavbarAuth = () => {
	return (
		<Flex gap="xs" ml="md">
			<Link to="/login" style={{ color: "#008aa8", fontSize: "15px" }}>
				Login
			</Link>

			<Link to="/signup" style={{ color: "#008aa8", fontSize: "15px" }}>
				Sign Up
			</Link>
		</Flex>
	);
};
