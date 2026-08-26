import { Button, Flex } from "@mantine/core";
import { Link } from "react-router-dom";

export const NavbarAuth = () => {
	return (
		<Flex gap="xs" ml="md">
			<Button component={Link} to="/login" variant="subtle" size="8px">
				Login
			</Button>

			<Button component={Link} variant="subtle" to="/signup" size="8px">
				Sign Up
			</Button>
		</Flex>
	);
};
