import { useKanbanStore } from "@/shared/store/store";
import KanbanLayout from "@/widgets/KanbanLayout/ui/KanbanLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "zustand";

export function KanbanPage() {
	const token = useStore(useKanbanStore, (state) => state.tokens.access_token);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token, navigate]);
	return (
		<div>
			<KanbanLayout />
		</div>
	);
}
