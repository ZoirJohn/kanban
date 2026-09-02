import "@mantine/core/styles.css";
import "@mantine/modals/styles.css";

import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

export function AppMantineProvider({ children }: { children: React.ReactNode }) {
	return (
		<MantineProvider>
			<ModalsProvider>{children}</ModalsProvider>
		</MantineProvider>
	);
}
