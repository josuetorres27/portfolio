import { I18N } from './translations.js';

// English is served at / and Spanish at /es/ (see the i18n block in astro.config.mjs).
export const LANGUAGES = ['en', 'es'];
export const DEFAULT_LANGUAGE = 'en';

export function getLanguage(locale) {
  return locale === 'es' ? 'es' : DEFAULT_LANGUAGE;
}

export function useTranslations(locale) {
  return I18N[getLanguage(locale)];
}

export function localizedPath(lang) {
  return lang === DEFAULT_LANGUAGE ? '/' : `/${lang}/`;
}
