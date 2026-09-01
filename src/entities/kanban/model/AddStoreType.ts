export interface UserStory {
	_attrs: {
		project: number;
		subject: string;
		description: string;
		tags: string[];
		points: Record<string, unknown>;
		swimlane: string | null;
		status: number;
		is_archived: boolean;
	};

	_name: string;
	_dataTypes: Record<string, unknown>;

	_modifiedAttrs: {
		tags: string[];
		description: string;
		subject: string;
	};

	_isModified: boolean;

	project: number;
	subject: string;
	description: string;
	tags: string[];
	points: Record<string, unknown>;
	swimlane: string | null;
	status: number;
	is_archived: boolean;
	is_closed: boolean;
}
