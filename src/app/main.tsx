import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";

export const queryClient = new QueryClient();

createRoot(document.getElementById("wrapper")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<App/>
			</MantineProvider>
		</QueryClientProvider>
	</StrictMode>
);
