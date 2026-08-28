import { TaigaLogo } from "@/shared/ui/TaigaLogo/TaigaLogo";
import { RegisterForm, LoginPrompt, SocialLogin } from "@/widgets";
import { Center, Container, Stack, Text } from "@mantine/core";

export function RegisterPage() {
	return (
		<Center mih={"90vh"}>
			<Container w="100%" maw={400} px="md">
				<Stack gap={0} align="stretch">
					<TaigaLogo />

					<Text ta="center" fz={32} fw={400} c="#343744" lh={1} mb={26}>
						Taiga
					</Text>

					<RegisterForm />

					<SocialLogin />

					<LoginPrompt />
				</Stack>
			</Container>
		</Center>
	);
}
