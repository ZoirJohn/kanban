import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import * as React from "react";

export function AppMantineProvider({ children }: { children: React.ReactNode }) {
	return <MantineProvider>{children}</MantineProvider>;
}
