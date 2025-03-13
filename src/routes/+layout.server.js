import { loadTranslations, locale } from '$lib/translations.js';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ cookies, url }) => {
    const initLocale = cookies.get('lang') || 'ru'; // Теперь cookies работает

    locale.set(initLocale);
    await loadTranslations(initLocale, url.pathname);

    return { initLocale };
};
