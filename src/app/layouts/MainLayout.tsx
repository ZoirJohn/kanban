import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { Navbar } from "../../widgets/Navbar/ui/Navbar";
import { useKanbanStore } from "@/shared/store/store";

export function MainLayout() {
	const token = useStore(useKanbanStore, (state) => state.tokens.access_token);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token, navigate]);

	return (
		<>
			<Navbar />

			<main>
				<Outlet />
			</main>
		</>
	);
}
