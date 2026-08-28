import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { IRegister } from "../model/type";
import { useRegisterUser } from "../model/useRegisterUser";
import { useStore } from "zustand";
import { useKanbanStore } from "@/shared/store/store";
import { Navigate } from "react-router-dom";

export const RegisterForm = () => {
	const { mutate: register, isPending: loading } = useRegisterUser();

	const accessToken = useStore(useKanbanStore, (state) => state.tokens.access_token);

	const form = useForm<IRegister>({
		initialValues: {
			username: "",
			full_name: "",
			email: "",
			password: "",
			accepted_terms: true,
			type: "public",
		},

		validate: {
			username: (value) =>
				value.trim().length < 3 ? "Username kamida 3 ta belgi bo'lishi kerak" : null,

			full_name: (value) =>
				value.trim().length < 3 ? "Ism kamida 3 ta belgi bo'lishi kerak" : null,

			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email noto'g'ri"),

			password: (value) =>
				value.length < 6 ? "Password kamida 6 ta belgi bo'lishi kerak" : null,
		},
	});

	const handleSubmit = form.onSubmit((values) => {
		register(values);
	});

	if (accessToken) {
		return <Navigate to="/" replace />;
	}

	return (
		<form onSubmit={handleSubmit}>
			<Stack gap={9}>
				<TextInput
					{...form.getInputProps("username")}
					placeholder="Username"
					size="sm"
					radius={2}
				/>

				<TextInput
					{...form.getInputProps("full_name")}
					placeholder="Full name"
					size="sm"
					radius={2}
				/>

				<TextInput
					{...form.getInputProps("email")}
					placeholder="Email"
					size="sm"
					radius={2}
				/>

				<PasswordInput
					{...form.getInputProps("password")}
					placeholder="Password"
					size="sm"
					radius={2}
				/>

				<Button
					type="submit"
					loading={loading}
					fullWidth
					h={32}
					radius={3}
					fw={400}
					c="#303344"
					bg="#7ee4d8"
				>
					REGISTER
				</Button>
			</Stack>
		</form>
	);
};
