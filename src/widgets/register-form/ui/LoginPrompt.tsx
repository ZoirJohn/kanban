import { Anchor, Group } from "@mantine/core";
import { Link } from "react-router-dom";

export const LoginPrompt = () => {
	return (
		<Group justify="center" mt={32}>
			<Anchor fz={14} component={Link} underline="always" to="/login" c="#343744">
				Are you already registered?{" "}
				<Anchor fz={14} c="#343744" underline="always">
					Login
				</Anchor>
			</Anchor>
		</Group>
	);
};
