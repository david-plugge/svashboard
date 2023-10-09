import { parse } from 'node-html-parser';

main();

async function main() {
	const youtube = await getIcons('https://www.youtube.com/');
	const discord = await getIcons('https://discord.com/');
	const twitch = await getIcons('https://www.twitch.tv/');
	const maps = await getIcons('https://www.google.de/maps');
	const github = await getIcons('https://github.com/');
	const npm = await getIcons('https://www.npmjs.com/');

	console.log(
		JSON.stringify(
			{
				youtube,
				discord,
				twitch,
				maps,
				github,
				npm
			},
			null,
			2
		)
	);
}

async function getIcons(url: string) {
	const res = await fetch(url);
	if (!res.ok) {
		return [];
	}

	const html = await res.text();
	const root = parse(html);

	const links = root
		.querySelectorAll('link')
		.filter((link) => link.getAttribute('rel')?.includes('icon'))
		.map((link) => {
			return {
				rel: link.getAttribute('rel')!,
				type: link.getAttribute('type'),
				size: parseSizes(link.getAttribute('sizes')),
				href: new URL(link.getAttribute('href')!, url)
			};
		})
		.sort((a, b) => {
			if (a.size && b.size) {
				return a.size.w - b.size.w || a.size.h - b.size.h;
			}

			return a.size ? 1 : b.size ? -1 : 0;
		});

	return links;
}

function parseSizes(str: string = '') {
	const match = str.match(/(\d+)x(\d+)/);

	if (!match) {
		return undefined;
	}

	return {
		w: parseInt(match[1]),
		h: parseInt(match[2])
	};
}
