import { Center, Container, Stack, Text } from "@mantine/core";
import { TaigaLogo } from "../../shared/ui/TaigaLogo/TaigaLogo.tsx";
import { LoginForm } from "../../widgets/login-form/ui/LoginForm.tsx";
import { SocialLogin } from "../../widgets/login-form/ui/SocialLogin.tsx";
import { RegisterPrompt } from "../../widgets/login-form/ui/RegisterPrompt.tsx";

export const LoginPage = () => {
	return (
		<Center mih="100vh">
			<Container w="100%" maw={400} px="md">
				<Stack gap={0} align="stretch">
					<TaigaLogo />

					<Text ta="center" fz={32} fw={400} c="#343744" lh={1} mb={26}>
						Taiga
					</Text>

					<Text ta="center" fz={28} fw={400} c="#343744" mb={32}>
						LOVE YOUR PROJECT
					</Text>

					<LoginForm />

					<SocialLogin />

					<RegisterPrompt />
				</Stack>
			</Container>
		</Center>
	);
};
