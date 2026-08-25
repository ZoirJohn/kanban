import { Anchor, Button, PasswordInput, Stack, TextInput } from "@mantine/core";

export const LoginForm = () => {
	return (
		<Stack gap={9}>
			<TextInput placeholder="Username or email (case sensitive)" size="sm" radius={2} />

			<PasswordInput
				placeholder="Password (case sensitive)"
				size="sm"
				radius={2}
				rightSection={
					<Anchor href="#" fz={14} c="#4a4a5d" underline="hover">
						Forgot it?
					</Anchor>
				}
				rightSectionWidth={75}
			/>

			<Button fullWidth h={32} radius={3} fw={400} c="#303344" bg="#7ee4d8">
				LOGIN
			</Button>
		</Stack>
	);
};
