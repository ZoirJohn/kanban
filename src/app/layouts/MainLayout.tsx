import { Outlet } from "react-router-dom";
import { Navbar } from "../../widgets/Navbar/ui/Navbar";
import { Container } from "@mantine/core";
export function MainLayout() {
	return (
		<>
			<Navbar />
			<Container size={"xl"}>
				<Outlet />
			</Container>
		</>
	);
}
