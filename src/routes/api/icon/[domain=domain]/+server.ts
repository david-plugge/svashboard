import { error } from '@sveltejs/kit';
import { parseDomainParam } from '../../../../params/domain.js';
import { parse } from 'node-html-parser';
import sharp from 'sharp';
import { Duplex, Readable } from 'stream';

const map = {
	sm: 64,
	md: 128,
	lg: 256,
	xl: 512
} as const;
type Size = keyof typeof map;

export const GET = async ({ params, url }) => {
	const domain = parseDomainParam(params.domain);
	const icons = await getIcons(domain);

	const size = (url.searchParams.get('size') as Size) ?? 'large';
	const targetHeight = map[size];

	console.log(icons);

	if (!icons) {
		throw error(404);
	}

	let index = icons.length - 1;
	for (let i = icons.length - 1; i >= 0; i--) {
		const current = icons[i];
		if (current.size) {
			if (current.size.h < targetHeight) {
				break;
			}
		}
	}

	const res = await fetch(icons[index].href, {
		headers: { Accept: 'image/*' }
	});

	if (!res.ok) {
		throw error(res.status);
	}
	if (!res.body) {
		throw error(404);
	}

	const body = pipeNode(res.body, sharp().resize(null, targetHeight).toFormat('png'));

	return new Response(body, {
		headers: {
			'Content-Type': 'image/png'
		}
	});
};

function pipeNode(webStream: ReadableStream, nodeStream: Duplex) {
	return Readable.toWeb(Readable.fromWeb(webStream as any).pipe(nodeStream)) as ReadableStream;
}

async function getIcons(url: string | URL) {
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
