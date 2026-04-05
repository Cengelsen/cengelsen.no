import { PROFILE_SLUGS } from '../../../../data/cv-profiles';

export const entries = () =>
	PROFILE_SLUGS.map((profile) => ({ lang: 'en', profile }));
