export interface Favourite {
	type: 'item';
	name: string;
	url: string;
	image?: string;
}

export interface Group {
	type: 'group';
	name: string;
	children: Favourite[];
	image?: string;
}

export type Item = Favourite | Group;
