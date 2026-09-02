import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";
import "./main.css";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
export const queryClient = new QueryClient();
createRoot(document.getElementById("wrapper")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<ModalsProvider />
				<Notifications style={{ position: "fixed", top: "50px", right: "5px" }} />
				<App />
			</MantineProvider>
		</QueryClientProvider>
	</StrictMode>
);
