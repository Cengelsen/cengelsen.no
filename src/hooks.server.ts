import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		return new Response(null, { status: 302, headers: { Location: '/no' } });
	}

	const lang = event.url.pathname.split('/')[1] || 'no';

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};