import { Box, Flex, Image, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { type ITask } from "../../model/projects";
interface DutyListProps {
	duties: ITask[];
}
interface DutyItemProps {
	duty: ITask;
}
export const DashboardTaskProject = ({ duties }: DutyListProps) => {
	return (
		<Stack gap={0}>
			{" "}
			<Box>
				{duties.map((duty) => (
					<DutyItem key={duty.id} duty={duty} />
				))}{" "}
			</Box>
			<Box
				py={10}
				px={16}
				style={{
					borderTop: "1px solid var(--mantine-color-gray-3)",
				}}
			>
				<Text size="sm" c="dimmed">
					You have no hidden items
				</Text>
			</Box>
		</Stack>
	);
};
const DutyItem = ({ duty }: DutyItemProps) => {
	const initials = duty.project_extra_info.name.slice(0, 2).toUpperCase();

	return (
		<Flex
			component="a"
			href={`/project/${duty.project_extra_info.slug}/us/${duty.ref}`}
			px={16}
			py={14}
			gap={12}
			align="center"
			style={{
				textDecoration: "none",
				color: "inherit",
				borderBottom: "1px solid var(--mantine-color-gray-2)",
				transition: "background-color 150ms ease",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.backgroundColor = "var(--mantine-color-gray-0)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.backgroundColor = "transparent";
			}}
		>
			<Box
				w={42}
				h={42}
				flex="0 0 auto"
				style={{
					borderRadius: 7,
					overflow: "hidden",
					background: "linear-gradient(135deg, #66e0d0, #4db8aa)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0 2px 6px rgba(0,0,0,.08)",
				}}
			>
				{duty.project_extra_info.logo_small_url ? (
					<Image
						src={duty.project_extra_info.logo_small_url}
						alt={duty.project_extra_info.name}
						w={42}
						h={42}
						fit="cover"
					/>
				) : (
					<Text size="sm" fw={700} c="white">
						{initials}
					</Text>
				)}
			</Box>

			<Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
				<Flex gap={7} align="center" wrap="wrap">
					<Text size="xs" fw={600} c="dimmed">
						{duty.project_extra_info.name}
					</Text>

					<Text size="xs" c="gray.5">
						•
					</Text>

					<Text size="xs" fw={500} c="gray.6">
						User story
					</Text>

					<Box
						px={7}
						py={2}
						style={{
							borderRadius: 4,
						}}
					>
						<Text
							size="xs"
							fw={600}
							style={{
								color: duty.status_extra_info.color,
							}}
						>
							{duty.status_extra_info.name}
						</Text>
					</Box>
				</Flex>

				<Flex gap={6} align="center" style={{ minWidth: 0 }}>
					<Text size="sm" fw={700} c="cyan.7">
						#{duty.ref}
					</Text>

					<Text size="sm" fw={500} lineClamp={1} style={{ flex: 1 }}>
						{duty.subject}
					</Text>
				</Flex>
			</Stack>

			<IconChevronRight size={18} stroke={1.5} color="var(--mantine-color-gray-5)" />
		</Flex>
	);
};
