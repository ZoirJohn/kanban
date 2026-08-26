import { Anchor, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useLoginUser } from "../model/useLoginUser";
import { useState } from "react";

export const LoginForm = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const auth = useLoginUser();

	const handleLogin = () => {
		auth.mutate({ username, password, type: "normal" });
	};
	return (
		<Stack gap={9}>
			<TextInput
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username or email (case sensitive)"
				size="sm"
				radius={2}
			/>

			<PasswordInput
				value={password}
				onChange={(e) => setPassword(e.target.value)}
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

			<Button
				fullWidth
				h={32}
				radius={3}
				fw={400}
				onClick={() => handleLogin()}
				c="#303344"
				bg="#7ee4d8"
			>
				LOGIN
			</Button>
		</Stack>
	);
};
