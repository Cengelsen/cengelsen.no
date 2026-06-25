const VALID_PROFILES = ['developer', 'administrator', 'organization-builder'];

export function match(param: string): boolean {
	return VALID_PROFILES.includes(param);
}
