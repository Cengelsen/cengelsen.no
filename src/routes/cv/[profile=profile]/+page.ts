import { PROFILE_SLUGS } from '../../../data/cv-profiles';

export const prerender = true;
export const entries = () => PROFILE_SLUGS.map((profile) => ({ profile }));
