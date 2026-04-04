import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const SUPPORTED = ['en', 'no'];
	const firstSegment = event.url.pathname.split('/')[1];
	const lang = SUPPORTED.includes(firstSegment) ? firstSegment : 'no';

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};