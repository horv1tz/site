import i18n from 'sveltekit-i18n';

const config = ({
    loaders: [
        {
            locale: 'ru',
            key: 'main',
            loader: async () => (await import('../locales/ru.json')).default,
        },
        {
            locale: 'en',
            key: 'main',
            loader: async () => (await import('../locales/en.json')).default,
        }
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

// Функция смены языка
export const setLocale = async (newLocale) => {
    locale.set(newLocale);
    if (typeof window !== 'undefined') {
        await loadTranslations(newLocale, '/'); // Загружаем переводы явно
    }
};

// Загружаем переводы при старте (чтобы избежать ошибки "No locale provided")
if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('lang') || 'ru';
    locale.set(savedLang);
    loadTranslations(savedLang, '/');
}
