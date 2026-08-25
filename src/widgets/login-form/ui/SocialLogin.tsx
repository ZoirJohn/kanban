import { Button, Stack, Text } from "@mantine/core";

export const SocialLogin = () => {
	return (
		<>
			<Text fz={14} c="#343744" mt={15} mb={7}>
				Or login with
			</Text>

			<Stack gap={8}>
				<Button fullWidth h={34} radius={3} fw={400} bg="#464657">
					SIGN IN WITH GITHUB
				</Button>

				<Button fullWidth h={34} radius={3} fw={400} bg="#464657">
					SIGN IN WITH GITLAB
				</Button>
			</Stack>
		</>
	);
};
