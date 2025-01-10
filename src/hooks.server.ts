/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {
	if (event.url.pathname == ('/')) {
		return new Response(null, { status: 302, headers: { Location: '/no' } });
	}

	const response = await resolve(event);
	return response;
}