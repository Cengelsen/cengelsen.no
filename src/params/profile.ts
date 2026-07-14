const VALID_PROFILES = ['developer', 'systemadministrator', 'administrator', 'organization-builder'];

export function match(param: string): boolean {
	return VALID_PROFILES.includes(param);
}
