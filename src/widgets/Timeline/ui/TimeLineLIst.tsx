import { useKanban } from "@/entities/kanban/model/useKanban";
import { Avatar, Grid, SimpleGrid, Title, Tooltip } from "@mantine/core";
import { useParams } from "react-router-dom";

interface Member {
	id: number;
	role: number;
	role_name: string;
	username: string;
	full_name: string;
	full_name_display: string;
	is_active: boolean;
	color: string;
	photo: string | null;
	big_photo?: string | null;
	gravatar_id: string;
}

const TAIGA_AVATAR_BASE = "https://tree.taiga.io/v-1778772818558/images/user-avatars";

// Taiga algoritmi: gravatar_id (MD5 hash) ni 5 ga bo'lib qoldig'ini olish (1 dan 5 gacha)
function getTaigaAvatarIndex(gravatarId: string): string {
	if (!gravatarId) return "01";

	try {
		const index = Number(BigInt("0x" + gravatarId) % 5n) + 1;
		return String(index).padStart(2, "0");
	} catch {
		return "01";
	}
}

function getAvatarUrl(member: Member): string {
	// 1. Agar foydalanuvchi o'zining shaxsiy rasmini yuklagan bo'lsa
	if (member.photo) {
		return member.photo;
	}

	// 2. Gravatar ID orqali Taiganing 5 ta default avatiridan mosini hisoblaymiz
	const avatarIndex = getTaigaAvatarIndex(member.gravatar_id);
	const fallbackUrl = `${TAIGA_AVATAR_BASE}/user-avatar-${avatarIndex}.png`;

	// 3. Gravatarga so'rov yuboramiz (agar gravatarda rasm bo'lmasa, yuqoridagi Taiga rasmini qaytaradi)
	return `https://www.gravatar.com/avatar/${member.gravatar_id}?s=200&d=${encodeURIComponent(
		fallbackUrl
	)}`;
}

function getInitials(name: string): string {
	if (!name) return "?";
	const parts = name.trim().split(/\s+/);
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function TimeLineLIst() {
	const { id } = useParams<{ id: string }>();

	const { data: idProject } = useKanban(id);

	return (
		<Grid w="100%" mt={30}>
			<Grid.Col span={{ base: 12, sm: 9 }}>
				<div
					style={{
						border: "1px solid red",
						height: 100,
					}}
				>
					Left
				</div>
			</Grid.Col>

			<Grid.Col span={{ base: 12, sm: 3 }}>
				<Title bg="#f1f1f4" c="#2e3440" order={5} px={16} py={6}>
					Team
				</Title>

				<SimpleGrid cols={4} spacing={8} mt={10}>
					{idProject?.members?.map((member: Member) => (
						<Tooltip
							key={member.id}
							label={`${member.full_name_display || member.username} (${member.role_name})`}
							withArrow
						>
							<Avatar
								src={getAvatarUrl(member)}
								alt={member.full_name_display || member.username}
								size="md"
								radius="xl"
								style={{ backgroundColor: member.color }}
								styles={{
									placeholder: {
										backgroundColor: member.color || "#70728F",
										color: "#ffffff",
										fontWeight: 600,
										fontSize: 12,
									},
								}}
							>
								{getInitials(member.full_name_display || member.username)}
							</Avatar>
						</Tooltip>
					))}
				</SimpleGrid>
			</Grid.Col>
		</Grid>
	);
}
