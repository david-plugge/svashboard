interface Item {
	type: 'item' | 'group';
	name: string;
	url: string;
	image?: string;
	children?: Item[];
}

export const favs: Item[] = [
	{
		type: 'item',
		name: 'Cloudflare',
		url: 'https://dash.cloudflare.com/'
	},
	{
		type: 'item',
		name: 'GitHub',
		url: 'https://github.com/david-plugge?tab=repositories'
	},
	{
		type: 'item',
		name: 'GithLab',
		url: 'https://gitlab.com/dashboard/projects'
	},
	{
		type: 'item',
		name: 'Netlify',
		url: 'https://app.netlify.com/'
	},
	{
		type: 'item',
		name: 'Oracle Cloud',
		url: 'https://cloud.oracle.com/compute'
	},
	{
		type: 'item',
		name: 'Netcup',
		url: 'https://www.customercontrolpanel.de/'
	},
	{
		type: 'item',
		name: 'Supabase',
		url: 'https://app.supabase.io/'
	},
	{
		type: 'item',
		name: 'Figma',
		url: 'https://www.figma.com/'
	},
	{
		type: 'group',
		name: 'Icons',
		url: '/group/icons',
		children: [
			{
				type: 'item',
				name: 'Iconify',
				url: 'https://icon-sets.iconify.design/'
			},
			{
				type: 'item',
				name: 'Heroicons',
				url: 'https://heroicons.com/'
			},
			{
				type: 'item',
				name: 'Feather',
				url: 'https://feathericons.com/'
			},
			{
				type: 'item',
				name: 'Google',
				url: 'https://fonts.google.com/icons'
			},
			{
				type: 'item',
				name: 'Iconfinder',
				url: 'https://www.iconfinder.com/'
			}
		]
	}
];
