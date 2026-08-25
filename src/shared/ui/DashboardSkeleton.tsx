import { Box, Stack } from "@mantine/core";

export function DashboardSkeleton() {
	return (
		<Stack gap={16}>
			{[1, 2].map((item) => (
				<Box
					key={item}
					pb={16}
					style={{
						borderBottom: "1px solid #ddd",
					}}
				>
					<Box display="flex" style={{ gap: 16 }}>
						<Box w={48} h={48} bg="gray.3" style={{ flexShrink: 0 }} />

						<Stack gap={8} style={{ flex: 1 }}>
							<Box h={16} w="45%" bg="gray.2" />

							<Box h={16} w="100%" bg="gray.2" />
						</Stack>
					</Box>
				</Box>
			))}
		</Stack>
	);
}
