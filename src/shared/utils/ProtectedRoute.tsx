import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({
	rule,
	redirectTo,
	children,
}: {
	rule: boolean;
	redirectTo: string;
	children: ReactNode;
}) {
	if (rule) {
		return <Navigate to={redirectTo} />;
	}
	return <>{children}</>;
}
