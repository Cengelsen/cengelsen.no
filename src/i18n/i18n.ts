import { addMessages, init, getLocaleFromNavigator, _ } from 'svelte-i18n';
import type { Translations } from '.././types/i18n.types';
import { derived } from 'svelte/store';
import { en } from './translations/en';
import { no } from './translations/no';

// Type-safe dictionary of supported locales
export const SUPPORTED_LOCALES = {
  en: 'en',
  no: 'no'
} as const;

export type LocaleKey = keyof typeof SUPPORTED_LOCALES;

// Initialize translations
addMessages('en', en);
addMessages('no', no);

init({
  fallbackLocale: 'no',
  initialLocale: getLocaleFromNavigator(),
});

// Type-safe translation helper
export const t = derived(_, ($_, ...params) => 
  (key: keyof Translations, vars?: Record<string, string | number>) => 
    $_(key as string, vars ? { values: vars } : undefined)
);