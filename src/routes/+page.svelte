<script>
    import { t, locale, setLocale } from '$lib/translations.js';
    import { onMount } from 'svelte';

    // Функция для смены языка
    function changeLanguage(lang) {
        if (typeof document !== 'undefined') {
            // Сохраняем язык в cookies и localStorage
            document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`; // 1 год
            localStorage.setItem('lang', lang);
        }
        setLocale(lang);
    }

    // При загрузке страницы проверяем localStorage
    onMount(() => {
        if (typeof localStorage !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            if (savedLang) {
                setLocale(savedLang);
            }
        }
    });
</script>

<div>
    <select name="lang" id="lang-select" on:change={e => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
    </select>
    <h1>{$t('main.hello_world')}</h1>
</div>
