const VALID_PROFILES = ['developer', 'administrator', 'community-builder'];

export function match(param: string): boolean {
	return VALID_PROFILES.includes(param);
}
