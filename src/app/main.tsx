import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";

import "@/app/main.css";
import App from "./App";

export const queryClient = new QueryClient();

createRoot(document.getElementById("wrapper")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<App />
			</MantineProvider>
		</QueryClientProvider>
	</StrictMode>
);
