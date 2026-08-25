import { Anchor, Group, Text } from "@mantine/core";

export const RegisterPrompt = () => {
	return (
		<Group justify="center" mt={32}>
			<Text fz={14} c="#343744">
				Not registered yet?
			</Text>

			<Anchor href="#" fz={14} c="#343744" underline="always">
				create your free account here
			</Anchor>
		</Group>
	);
};
