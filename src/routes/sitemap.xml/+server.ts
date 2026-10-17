import { collectSitemapUrls, generateSitemapXml, sitemapResponse } from '$lib/sitemap';
import { SITE_URL } from '$lib/site';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const urls = await collectSitemapUrls(SITE_URL);
	const xml = generateSitemapXml(urls);
	return sitemapResponse(xml);
};
