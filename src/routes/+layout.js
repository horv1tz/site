import { browser } from '$app/environment';
import { locale } from '$lib/translations.js';

if (browser) {
    const savedLang = localStorage.getItem('lang') || 'ru';
    locale.set(savedLang);
}
