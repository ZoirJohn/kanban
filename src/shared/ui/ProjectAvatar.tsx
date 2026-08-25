import { Avatar } from "@mantine/core";
import { IconHexagonLetterA } from "@tabler/icons-react";

interface ProjectAvatarProps {
	color: string;
}

export function ProjectAvatar({ color }: ProjectAvatarProps) {
	return (
		<Avatar
			size={50}
			radius={0}
			styles={{
				root: {
					backgroundColor: color,
				},
			}}
		>
			<IconHexagonLetterA size={34} />
		</Avatar>
	);
}
