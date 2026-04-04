import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.url.pathname.split('/')[1] || 'no';

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};