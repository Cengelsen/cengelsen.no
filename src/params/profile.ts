import { PROFILE_SLUGS } from '../data/cv-profiles';

export function match(param: string): boolean {
	return (PROFILE_SLUGS as readonly string[]).includes(param);
}
