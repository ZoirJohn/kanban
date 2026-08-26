import { Outlet } from "react-router-dom";
import { Navbar } from "../../widgets/Navbar/ui/Navbar";
export function MainLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
}
